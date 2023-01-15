import React, { useState, useEffect, useSyncExternalStore } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import CreatableSelect from "react-select/creatable";

function AddProduct() {
  const [itemLength, setItemLength] = useState();
  useEffect(() => {
    async function getProductCount() {
      const response = await axios.get(
        "https://samyak-eshop-upgrad.onrender.com/products/display"
      );
      if (!response.error) {
        console.log(response);
        setItemLength(response.data.data.length);
        setState({ ...state, itemId: response.data.data.length + 1 });
        console.log("Items in the db => ", response.data.data.length);
      }
    }
    getProductCount();
  }, []);

  const createOption = (label) => ({
    label,
    value: label,
  });

  const defaultOptions = [
    createOption("One"),
    createOption("Two"),
    createOption("Three"),
  ];

  const [options, setOptions] = useState(defaultOptions);
  const [value, setValue] = useState();

  const handleCreate = (inputValue) => {
    const newOption = createOption(inputValue);
    setOptions((prev) => [...prev, newOption]);
    setValue(newOption);
    setState({ ...state, itemCategory: inputValue });
  };

  const handleItemCategoryChange = (newValue) => {
    setValue(newValue);
    setState({ ...state, itemCategory: newValue.value });
  };

  const [state, setState] = useState({
    itemId: "",
    itemName: "",
    itemCategory: "",
    itemManufacturer: "",
    availableQuantity: "",
    itemPrice: "",
    itemImageUrl: "",
    itemDesc: "",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const {
      itemId,
      itemName,
      itemCategory,
      itemManufacturer,
      availableQuantity,
      itemPrice,
      itemImageUrl,
      itemDesc,
    } = state;
    if (
      !itemId ||
      !itemName ||
      !itemCategory ||
      !itemManufacturer ||
      !availableQuantity ||
      !itemPrice ||
      !itemImageUrl ||
      !itemDesc
    ) {
      alert("Please fill all the required fields!");
      return;
    }
    try {
      const response = await axios.post("http://localhost:4000/products/add", {
        itemId,
        itemName,
        itemCategory,
        itemManufacturer,
        availableQuantity,
        itemPrice,
        itemImageUrl,
        itemDesc,
      });
      if (!response.error) {
        console.log(response);
        alert("Product added successfully!");
        navigate("/products");
      }
    } catch {
      alert("Error in adding a product!");
    }
  };

  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <div className="signin-div">
          <label style={{ fontWeight: "520", fontSize: "25px" }}>
            Add Product
          </label>
          <div className="email-password-div">
            <div style={{ margin: "15px" }}>
              <TextField
                id="outlined-basic"
                label="Name *"
                variant="outlined"
                sx={{ width: "40ch" }}
                type="text"
                name="itemName"
                value={state.itemName}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div style={{ margin: "15px" }}>
              {/* <TextField
                id="outlined-basic"
                label="Item Category *"
                variant="outlined"
                sx={{ width: "40ch" }}
                type="text"
                name="itemCategory"
                value={state.itemCategory}
                onChange={(e) => handleChange(e)}
              /> */}
              <CreatableSelect
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    height: "56px",
                  }),
                }}
                isClearable
                onChange={(newValue) => handleItemCategoryChange(newValue)}
                onCreateOption={handleCreate}
                options={options}
                value={value}
              />
            </div>
            <div style={{ margin: "15px" }}>
              <TextField
                id="outlined-basic"
                label="Manufacturer *"
                variant="outlined"
                sx={{ width: "40ch", zIndex: "-1" }}
                type="text"
                name="itemManufacturer"
                value={state.itemManufacturer}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div style={{ margin: "15px" }}>
              <TextField
                id="outlined-basic"
                label="Available Items *"
                variant="outlined"
                sx={{ width: "40ch", zIndex: "-1" }}
                type="text"
                name="availableQuantity"
                value={state.availableQuantity}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div style={{ margin: "15px" }}>
              <TextField
                id="outlined-basic"
                label="Price *"
                variant="outlined"
                sx={{ width: "40ch" }}
                type="text"
                name="itemPrice"
                value={state.itemPrice}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div style={{ margin: "15px" }}>
              <TextField
                id="outlined-basic"
                label="Image URL"
                variant="outlined"
                sx={{ width: "40ch" }}
                type="text"
                name="itemImageUrl"
                value={state.itemImageUrl}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div style={{ margin: "15px" }}>
              <TextField
                id="outlined-basic"
                label="Product Description"
                variant="outlined"
                sx={{ width: "40ch" }}
                type="text"
                name="itemDesc"
                value={state.itemDesc}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="signup-button-div">
            <Button
              variant="contained"
              sx={{ width: "45ch", background: "var(--primary)" }}
              onClick={(e) => handleAddProduct(e)}
            >
              SAVE PRODUCT
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;