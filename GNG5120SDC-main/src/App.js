import React, {useEffect, useState} from "react"
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    makeStyles,
    Radio,
    RadioGroup,
    createStyles,
    InputLabel, Select, MenuItem, Button, Link
} from "@material-ui/core";
import "./App.css"


const App = () => {
    const [productImg, setProductImg] = useState([])
    const [singleProductData, setSingleProductData] = useState(null)
    const [priceSum, setPriceSum] = useState(null)
    const [priceSumTotal, setPriceSumTotal] = useState(null)
    const [categoryItemsIndex, setCategoryItemsIndex] = useState(null)
    const [mainImgIndex, setMainImgIndex] = useState(0)
    const [productCount, setProductCount] = useState(1)
    const [passProductIndex, setPassProductIndex] = useState([])
    const [passProductIndexID, setPassProductIndexID] = useState([])
    // const [passProductInfo, setPassProductInfo] = useState({
    //     id: parseInt(props.props.match?.params?.id)
    //     , itemIndex: [], count: 0, itemIndexID: [],
    //     price: 0
    // })
    const [galleryTrigger, setGalleryTrigger] = useState(false)
    const [showMagnifier, setShowMagnifier] = useState(false)
    const [[x, y], setXY] = useState([0, 0]);
    const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
    const [alertTrigger, setAlertTrigger] = useState(false)
    const magnifierHeight = 100
    const magnifieWidth = 100
    const zoomLevel = 1.5
    const navBarMargin = {
        style: {
            margin: 0,
        }
    }


    // console.log('imgArr',singleProductData.media.split("|"))

        //change price
    // const priceCalculate = (price, indexP) => {
    //     let priceSumNumber = 0.0
    //     let newID = parseInt(props.props.match?.params?.id) - 1
    //     setCategoryItemsIndex(indexP)
    //     let newPriceArray = priceSum
    //     newPriceArray.splice(indexP, 1, parseFloat(price))
    //     newPriceArray.forEach((value) => {
    //         priceSumNumber += value
    //     })
    //     priceSumNumber = priceSumNumber + parseFloat(productList[newID]?.price)
    //     setPriceSum(newPriceArray)
    //     setPriceSumTotal(priceSumNumber)
    // }
        //init price
    // const firstPrice = () => {
    //     let newID = parseInt(props.props.match?.params?.id) - 1
    //     let sum = []
    //     let priceSumNumber = 0.0
    //     productList[newID]?.profileCategories?.map((ele, index) => {
    //         sum.push(parseFloat(ele.profileItems[1].price))
    //     })
    //     sum.forEach((value) => {
    //         priceSumNumber += value
    //     })
    //     priceSumNumber = priceSumNumber + parseFloat(productList[newID]?.price)
    //     setPriceSum(sum)
    //     setPriceSumTotal(priceSumNumber)
    // }
    // const initCart = () => {
    //     //setPassProductIndexID
    //     //setPassProductIndex
    //     if (passProductIndex.length <= 7 && passProductIndexID.length <= 7) {
    //         let newID = parseInt(props.props.match?.params?.id)
    //         let product
    //         if (productList) {
    //             product = productList.find(item => newID === item.id)
    //             setSingleProductData(product)
    //         }
    //         let newIndex = []
    //         let newIndexID = []
    //         product?.profileCategories?.map((item, index1) => {
    //             item.profileItems.map((ele, index2) => {
    //                 if (ele.checked === true) {
    //                     newIndex.push(index2)
    //                     newIndexID.push(ele.id)
    //                 }
    //             })
    //         })
    //         setPassProductIndexID(newIndexID)
    //         setPassProductIndex(newIndex)
    //     }
    //
    // }

    //get Index and productItemID information and save them
    // const getSingleInfo = (index1, index2) => {
    //     let newProductList = singleProductData
    //     let newIndex = passProductIndex
    //     let newIndexId = passProductIndexID
    //     newIndex[index1] = index2
    //     newIndexId[index1] = newProductList.profileCategories[index1].profileItems[index2].id
    //     setPassProductIndex(newIndex)
    //     setPassProductIndexID(newIndexId)
    //     newProductList.profileCategories[index1].profileItems.forEach((trigger, i) => {
    //         if (i === index2) {
    //             trigger.checked = true
    //         } else {
    //             trigger.checked = false
    //         }
    //     })
    // }
    //pass index
    // useEffect(() => {
    //     setPassProductInfo({...passProductInfo, itemIndex: passProductIndex, count: productCount})
    // }, [passProductIndex, productCount])
    //
    // //fetch all data
    // useEffect(() => {
    //     if (productList && productList.length === 0) {
    //         getProductList()(dispatch)
    //     }
    // }, [])
    //
    // // get the page data from reducer when refresh
    // useEffect(() => {
    //     let newID = parseInt(props.props.match?.params?.id)
    //     if (productList) {
    //         let product = productList.find(item => newID === item.id)
    //         setSingleProductData(product)
    //     }
    //     initCart()
    // }, [productList])

    //get product img
    // useEffect(() => {
    //     if (singleProductData) {
    //         setProductImg(singleProductData.media.split("|"))
    //     }
    // }, [singleProductData])

    // useEffect(() => {
    //     firstPrice()
    // }, [productList, singleProductData])

    const useStyles = makeStyles({
        grid: {
            position: "sticky",
            top: "80px",
        },
    });
    const classes = useStyles();
    //bottomBar
    // const handleChange = (event) => {
    //     setProductCount(event.target.value)
    // }

    //image gallery
    // const bigImgGallery = () => {
    //     return (
    //         <Grid className={galleryTrigger ? "singleImgGallery" : "singleImgGalleryClose"}>
    //             <Grid className="singleProductGallerySmall">
    //                 {productImg?.map((ele, index) => {
    //                     return (
    //                         <Grid key={"singleImgGallery" + index} className="smallProductImgSmall">
    //                             <img src={ele} alt="" onClick={() => {
    //                                 setMainImgIndex(index)
    //                             }}/>
    //                         </Grid>
    //                     )
    //                 })}
    //             </Grid>
    //             <Grid className="singleProductImgSmallMain">
    //                 <img src={productImg[mainImgIndex]} alt="" onClick={() => setGalleryTrigger(false)}/>
    //             </Grid>
    //         </Grid>
    //     )
    // }

    //successful add cart alert fade in/out
    // const alertInfoTrigger = (trigger) => {
    //     setAlertTrigger(trigger)
    //     window.setTimeout(() => {
    //         setAlertTrigger(false)
    //     }, 2000)
    // }
    const successfulAddCart = () => {
        return (
            <Grid className={alertTrigger ? "successfulAddCartContainer" : "successfulAddCartClose"}>
                <h1 className="successfulAddCartAlert">Successful added to cart</h1>
            </Grid>
        )
    }


    return (
        <Grid>
            {/*{bigImgGallery()}*/}
            {successfulAddCart()}
            <Grid container spacing={0} className="functionNavBarContainer" spacing-xs-2={navBarMargin}>
                <Grid item xs={1}>Store</Grid>
                <Grid item xs={1}>Contact</Grid>
                <Grid item xs={8}>Customer Service 888 798 0202</Grid>
                <Grid item xs={1} className="loginButton">
                    <Link to="/login&register">My Account <i className="fas fa-user"></i></Link>
                    <div className="showLogin">

                    </div>
                </Grid>
                <Grid item xs={1} className="cartButton">
                    <Link to="/Cart">Cart <i className="fas fa-shopping-cart"></i></Link>
                    <div className="showBar">
                        MiniCart
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={0} className="discountInfoBarContainer">
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>Enjoy Free Shopping on Smart Collar + 0% Financing Available</Grid>
                <Grid item xs={1}><i className="fas fa-times"></i></Grid>
            </Grid>

            <div className="siteNavBar">Home&nbsp;&nbsp;<i
                className="fas fa-chevron-right"></i>&nbsp;&nbsp;Pet&nbsp;&nbsp;<i
                className="fas fa-chevron-right"></i>&nbsp;&nbsp;Collar
            </div>
            <Grid className="singleProductContainer" container spacing={0}>
                {/*{console.log(singleProductData)}*/}
                <Grid className="singleProductLeft" item xs={9}>
                    <Grid item xs={2} className="singleProductGallery">
                        <Grid className="smallProductImg">
                            <img src="https://i0.wp.com/www.sabonews.org/wp-content/uploads/2021/09/ANIME-GIRL-CUTE.jpg?w=375&ssl=1" alt="" />
                        </Grid>
                        <Grid className="smallProductImg">
                            <img src="https://i0.wp.com/www.sabonews.org/wp-content/uploads/2021/09/ANIME-GIRL-CUTE.jpg?w=375&ssl=1" alt="" />
                        </Grid>
                        <Grid className="smallProductImg">
                            <img src="https://i0.wp.com/www.sabonews.org/wp-content/uploads/2021/09/ANIME-GIRL-CUTE.jpg?w=375&ssl=1" alt="" />
                        </Grid>
                        <Grid className="smallProductImg">
                            <img src="https://i0.wp.com/www.sabonews.org/wp-content/uploads/2021/09/ANIME-GIRL-CUTE.jpg?w=375&ssl=1" alt="" />
                        </Grid>
                        <Grid className="smallProductImg">
                            <img src="https://i0.wp.com/www.sabonews.org/wp-content/uploads/2021/09/ANIME-GIRL-CUTE.jpg?w=375&ssl=1" alt="" />
                        </Grid>

                        {/*{productImg?.slice(0, productImg.length - 2).map((ele, index) => {*/}
                        {/*  return (*/}
                        {/*      <Grid key={"singleProductData" + index} className="smallProductImg">*/}
                        {/*        <img src={ele} alt="" onClick={() => {*/}
                        {/*          setMainImgIndex(index)*/}
                        {/*        }}/>*/}
                        {/*      </Grid>*/}
                        {/*  )*/}
                        {/*})}*/}
                        <Grid className="twoMore">
                            <Button>More</Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={10} className="singleProductImg">
                        {/*mask and  zoom*/}
                        <Grid className="smallMainSingle">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/660px-No-Image-Placeholder.svg.png?20200912122019"
                                alt=""
                            />
                            <div
                                // style={{
                                //     display: showMagnifier ? "" : "none",
                                //     position: "absolute",
                                //     // prevent magnifier blocks the mousemove event of img
                                //     pointerEvents: "none",
                                //     // set size of magnifier
                                //     height: `${magnifierHeight}px`,
                                //     width: `${magnifieWidth}px`,
                                //     // move element center to cursor pos
                                //     top: `${y - magnifierHeight / 2}px`,
                                //     left: `${x - magnifieWidth / 2}px`,
                                //     borderRadius: "50px",
                                //     opacity: "1", // reduce opacity so you can verify position
                                //     border: "1px solid lightgray", // show the border of magnifier
                                //     backgroundColor: "white",
                                //     // backgroundImage: `url('${productImg[mainImgIndex]}')`,
                                //     backgroundRepeat: "no-repeat",
                                //     backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
                                //     backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
                                //     backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`
                                //
                                // }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3} className="singleProductSelection">
                    <Grid><h2> Collar </h2></Grid>
                    {/*<Grid><h2>{singleProductData?.name}</h2></Grid>*/}
                    <Grid className="singleProductPrice">Design by Studio 5.0</Grid>
                    <Grid className="singleProductCheck">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </Grid>
                    <Grid>$ 3333.00</Grid>
                    <Grid className="singleProductCheck"><i className="fas fa-check"></i> 12-Year Warranty</Grid>
                    <Grid className="singleProductCheck"><i className="fas fa-check"></i> Free Standard Shipping</Grid>
                    <Grid className="singleProductCheck"><i className="fas fa-check"></i> 30-Day No Hassle Return</Grid>
                    <Grid className="singleProductCheck">Free Shipping</Grid>
                    <Grid className="singleCategoryContainer">
                        <FormControl component="fieldset" className="singleCategoryContainer">

                            <FormLabel component="legend"><Grid
                                className="singleCategoryName">Size</Grid></FormLabel>

                            <RadioGroup
                                aria-label = "collar"
                                name = "collar"
                                defaultValue="Mid"
                                // onChange={true}
                            >
                                <FormControlLabel className="singleCategoryElements"
                                    // 如果value改成checked，则无法选择选项
                                                  value= "Big" control={<Radio/>}
                                                  label= "Big" />
                                <FormControlLabel className="singleCategoryElements"
                                    // 如果value改成checked，则无法选择选项
                                                  value= "Mid" control={<Radio/>}
                                                  label= "Mid" />
                                <FormControlLabel className="singleCategoryElements"
                                    // 如果value改成checked，则无法选择选项
                                                  value= "Small" control={<Radio/>}
                                                  label= "Small" />
                                <FormControlLabel className="singleCategoryElements"
                                    // 如果value改成checked，则无法选择选项
                                                  value= "Customize" control={<Radio/>}
                                                  label= "Customize" />
                            </RadioGroup>

                            <FormLabel component="legend"><Grid
                                className="singleCategoryName">Color</Grid></FormLabel>
                            <RadioGroup
                                aria-label = "Color"
                                name = "Color"
                                defaultValue="Yellow"
                                // onChange={true}
                            >
                                <FormControlLabel className="singleCategoryElements"
                                    // 如果value改成checked，则无法选择选项
                                                  value= "Black" control={<Radio/>}
                                                  label= "Black" />
                                <FormControlLabel className="singleCategoryElements"
                                    // 如果value改成checked，则无法选择选项
                                                  value= "White" control={<Radio/>}
                                                  label= "White" />
                                <FormControlLabel className="singleCategoryElements"
                                    // 如果value改成checked，则无法选择选项
                                                  value= "Yellow" control={<Radio/>}
                                                  label= "Yellow" />
                                <FormControlLabel className="singleCategoryElements"
                                    // 如果value改成checked，则无法选择选项
                                                  value= "Green" control={<Radio/>}
                                                  label= "Green" />
                                <FormControlLabel className="singleCategoryElements"
                                    // 如果value改成checked，则无法选择选项
                                                  value= "Blue" control={<Radio/>}
                                                  label= "Blue" />
                                <FormControlLabel className="singleCategoryElements"
                                    // 如果value改成checked，则无法选择选项
                                                  value= "Red" control={<Radio/>}
                                                  label= "Red" />
                            </RadioGroup>

                        </FormControl>
                    </Grid>
                    {/*{*/}
                    {/*  // get product by 2 map, first map name of the category then map the profileItems inside the category*/}
                    {/*  singleProductData?.profileCategories?.map((ele1, index1) => {*/}
                    {/*    return (*/}
                    {/*        <Grid key={"singleProduct" + index1} className="singleCategoryContainer">*/}
                    {/*          <FormControl component="fieldset" className="singleCategoryContainer">*/}
                    {/*            <FormLabel component="legend"><Grid*/}
                    {/*                className="singleCategoryName">{ele1.name}</Grid></FormLabel>*/}
                    {/*            <RadioGroup*/}
                    {/*                aria-label={ele1.name}*/}
                    {/*                name={ele1.name}*/}
                    {/*                onChange={(evt) => priceCalculate(evt.target.value, index1)}*/}
                    {/*            >*/}
                    {/*              {*/}
                    {/*                ele1.profileItems.map((ele2, index2) => {*/}
                    {/*                  return (*/}
                    {/*                      <FormControlLabel className="singleCategoryElements"*/}
                    {/*                                        key={"singleInside" + index2}*/}
                    {/*                          // 如果value改成checked，则无法选择选项*/}
                    {/*                                        value={ele2.price} control={<Radio/>}*/}
                    {/*                                        checked={ele2.checked ? true : false}*/}
                    {/*                                        label={ele2.name} onClick={() => {*/}
                    {/*                        getSingleInfo(index1, index2)*/}
                    {/*                      }}/>*/}
                    {/*                  )*/}
                    {/*                })}*/}
                    {/*            </RadioGroup>*/}
                    {/*          </FormControl>*/}
                    {/*        </Grid>*/}
                    {/*    )*/}
                    {/*  })*/}
                    {/*}*/}
                </Grid>
            </Grid>
            <Grid className="singleProductFooter">
                <Grid>
                    <h1>Description</h1>
                </Grid>
                <Grid className="singleProductFooterDetail" container spacing={0}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={4} className="singleProductFooterDetailLeft">
                      description
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={4} className="singleProductFooterDetailRight">
                        <h2>Key Features</h2>
                        <ul className="singleProductFooterDetailRightList">
                            <li>12-Year Warranty</li>
                            <li>Named 100 Best Inventions By Time Magazine In 2019</li>
                            <li>Auto-Harmonic™ Tilt Mechanism Automatically Adjusts</li>
                            <li>Flexible Frame</li>
                            <li>Continuous And Breathable Seat And Back</li>
                            <li>One Adjustment For Height</li>
                            <li>Wrap-Top Facilitates Casual Collaboration</li>
                            <li>Available In Three Arm Styles: Fixed, Fully Adjustable, And Leaf</li>
                            <li>Dipped-In-Color Option</li>
                            <li>Made In Michigan At A 100% Green-Energy Facility</li>
                            <li>For Questions About Lead Times, In-Stock Options Or Delivery Please Give Usa Call At
                                888-888-8888
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </Grid>
            <Grid container spacing={0} className="singleProductCartBarContainer">
                <Grid item xs={2} className="cartBarPad">Embody Chair</Grid>
                <Grid item xs={5} className="cartBarPad"></Grid>
                <Grid item xs={1} className="cartBarPad"><i className="fas fa-truck fa-flip-horizontal"></i> In
                    stock</Grid>
                <Grid item xs={1} className="cartBarPad">CS$ 200.00</Grid>
                <Grid item xs={1} className="cartBarPad">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label"></InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value= {1}
                            onChange={true}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={2} className="cartBarPad"><Button variant="contained" color="secondary">Add Cart</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}
//onClick={() => { func1(); func2();}}

export default App



