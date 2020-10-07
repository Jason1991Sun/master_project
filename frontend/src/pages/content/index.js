import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveItem, listItems, deleteItem } from "../../actions/itemActions";
import {
  ContentWraper,
  ContentHeaderWraper,
  ContentHeader,
  FormHeading,
  CreateButton,
  FromButton,
  ItemListWraper,
  ItemListTable,
  ItemListTHead,
  ItemListTH,
  ItemListTBody,
} from "./style";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginBottom: theme.spacing(3),
    border: "1px solid grey",
    display: "inline-flex",
    flexWrap: "wrap",

    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "23%",
    },
  },
}));

function Content(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState("");
  const [short_name, setName] = useState("");
  const [Item_Price, setPrice] = useState("");
  const [Item_Category, setCategory] = useState("");
  const [Item_Quantity, setQuantity] = useState("");
  const [Description, setDescription] = useState("");
  const [Fabric_Content, setFabric_Content] = useState("");
  const [Item_img, setItem_img] = useState("");
  const [new_arrive, setNew_arrive] = useState("");
  const [no_of_images, setNo_of_images] = useState("");
  const [Item_Name, setItem_Name] = useState("");
  const [Item_Code, setItem_Code] = useState("");
  const [Item_Color, setItem_Color] = useState("");
  const itemList = useSelector((state) => state.itemList);
  const { items, loading, error } = itemList;
  const classes = useStyles();
  const itemSave = useSelector((state) => state.itemSave);
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = itemSave;

  const itemDelete = useSelector((state) => state.itemDelete);
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = itemDelete;
  const dispatch = useDispatch();

  useEffect(() => {
    if (successSave) {
      setModalVisible(false);
    }
    dispatch(listItems());
    return () => {
      //
    };
  }, [successSave, successDelete]);

  const openModal = (item) => {
    setModalVisible(true);
    setId(item._id);
    setName(item.short_name);
    setPrice(item.Item_Price);
    setDescription(item.Description);
    setCategory(item.Item_Category);
    setQuantity(item.Item_Quantity);
    setFabric_Content(item.Fabric_Content);
    setItem_Code(item.Item_Code);
    setItem_Name(item.Item_Name);
    setItem_Color(item.Item_Color);
    setItem_img(item.item_img);
    setNew_arrive(item.new_arrive);
    setNo_of_images(item.no_of_images);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveItem({
        _id: id,
        Item_Name,
        Item_Code,
        Item_Color,
        Fabric_Content,
        Special_Offer: null,
        Item_img: Item_img,
        new_arrive,
        no_of_images,
        short_name,
        Item_Price,
        Item_Category,
        Item_Quantity,
        Description,
      })
    );
  };
  const deleteHandler = (item) => {
    dispatch(deleteItem(item._id));
  };

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <ContentWraper>
      <ContentHeaderWraper>
        <ContentHeader>Items</ContentHeader>
        <CreateButton onClick={() => openModal({})}>Create Item</CreateButton>
      </ContentHeaderWraper>
      {modalVisible && (
        <div>
          <form
            className={classes.form}
            noValidate
            autoComplete="off"
            onSubmit={submitHandler}
          >
            <FormHeading> {id ? "Update Item" : "Create Item"}</FormHeading>
            <div>
              {loadingSave && <div>Loading...</div>}
              {errorSave && <div>{errorSave}</div>}
            </div>
            <TextField
              variant="outlined"
              label="Item Name"
              name="Item Name"
              value={Item_Name}
              id="Item_Name"
              onChange={(e) => setItem_Name(e.target.value)}
            />
            <TextField
              variant="outlined"
              label="Name"
              name="name"
              value={short_name}
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              variant="outlined"
              label="Item Code"
              name="Item Code"
              value={Item_Code}
              id="Item Code"
              onChange={(e) => setItem_Code(e.target.value)}
            />
            <TextField
              variant="outlined"
              label="Price"
              name="price"
              value={Item_Price}
              id="price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <TextField
              variant="outlined"
              label="Quantity"
              name="quantity"
              value={Item_Quantity}
              id="quantity"
              onChange={(e) => setQuantity(e.target.value)}
            />
            <TextField
              variant="outlined"
              label="Category"
              name="category"
              value={Item_Category}
              id="category"
              onChange={(e) => setCategory(e.target.value)}
            />
            <TextField
              variant="outlined"
              label="Color"
              name="color"
              value={Item_Color}
              id="color"
              onChange={(e) => setItem_Color(e.target.value)}
            />
            <TextField
              variant="outlined"
              label="Fabric Content"
              name="Fabric_Content"
              value={Fabric_Content}
              id="Fabric_Content"
              onChange={(e) => setFabric_Content(e.target.value)}
            />
            <TextField
              label="Description"
              multiline
              rows={4}
              name="description"
              value={Description}
              id="description"
              onChange={(e) => setDescription(e.target.value)}
              variant="outlined"
            />
            <div>
              <FromButton type="submit">{id ? "Update" : "Create"}</FromButton>
              <FromButton onClick={() => setModalVisible(false)}>
                Back
              </FromButton>
            </div>
          </form>
        </div>
      )}

      <ItemListWraper>
        <ItemListTable>
          <ItemListTHead>
            <tr>
              <ItemListTH>ID</ItemListTH>
              <ItemListTH>Name</ItemListTH>
              <ItemListTH>Code</ItemListTH>
              <ItemListTH>Price</ItemListTH>
              <ItemListTH>Color</ItemListTH>
              <ItemListTH>Fabric Content</ItemListTH>
              <ItemListTH>Category</ItemListTH>
              <ItemListTH>Quantity</ItemListTH>
              <ItemListTH>Action</ItemListTH>
            </tr>
          </ItemListTHead>
          <ItemListTBody>
            {items.map((item) => (
              <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.short_name}</td>
                <td>{item.Item_Code}</td>
                <td>{item.Item_Price}</td>
                <td>{item.Item_Color}</td>
                <td>{item.Fabric_Content}</td>
                <td>{item.Item_Category}</td>
                <td>{item.Item_Quantity}</td>
                <td>
                  <button onClick={() => openModal(item)}>Edit</button>{" "}
                  <button onClick={() => deleteHandler(item)}>Delete</button>
                </td>
              </tr>
            ))}
          </ItemListTBody>
        </ItemListTable>
      </ItemListWraper>
    </ContentWraper>
  );
}
export default Content;
