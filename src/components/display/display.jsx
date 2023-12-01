import React, {useState, useEffect} from 'react';
import './display.css';
import { Rating } from '../product_card/product_card.jsx';
import { Fav } from '../product_card/product_card.jsx';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Product_card from '../product_card/product_card.jsx';

const Img_set = [
    [
    "./images/product_img1.png",
    "./images/product_img2.png",
    "./images/product_img3.png",
    "./images/product_img4.png"
    ],
    [
        "./images/alt_img.png",
        "./images/alt_img1.png",
        "./images/alt_img.png",
        "./images/alt_img1.png",
    ]
];

export default function Display({name,num,rate_num,stock,price,description}){

    const [col, setCol] = useState(Img_set[0]);

    const [imgBorder1,setImgBorder1] = useState(true);
    const [imgBorder2,setImgBorder2] = useState(0);
    const [imgBorder3,setImgBorder3] = useState(0);
    const [imgBorder4,setImgBorder4] = useState(0);


    // A bit static approach. Make dynamic if necessary.
    const [mainImg, setMainImg] = useState(`url(${col[0]})`);

    function imgClick1(){
        setImgBorder1(true);
        setImgBorder2(0);
        setImgBorder3(0);
        setImgBorder4(0);
        setMainImg(`url(${col[0]})`);
    }

    function imgClick2(){
        setImgBorder1(0);
        setImgBorder2(true);
        setImgBorder3(0);
        setImgBorder4(0);
        setMainImg(`url(${col[1]})`);
    }

    function imgClick3(){
        setImgBorder1(0);
        setImgBorder2(0);
        setImgBorder3(true);
        setImgBorder4(0);
        setMainImg(`url(${col[2]})`);
    }

    function imgClick4(){
        setImgBorder1(0);
        setImgBorder2(0);
        setImgBorder3(0);
        setImgBorder4(true);
        setMainImg(`url(${col[3]})`);
    }

    return(
        <div className="display_comp_parent">
        <div className="product_display_parent">
            <div className="image_parent">
                <div className="side_image_parent">
                    <div className="side_image" onClick={imgClick1} style={{border:imgBorder1, 
                    backgroundImage:`url(${col[0]})`}}>
                        <div className="side_img1"></div>
                    </div>
                    <div className="side_image" onClick={imgClick2} style={{border:imgBorder2 , 
                    backgroundImage:`url(${col[1]})`}}>
                        <div className="side_img2"></div>
                    </div>
                    <div className="side_image" onClick={imgClick3} style={{border:imgBorder3 , 
                    backgroundImage:`url(${col[2]})`}}>
                        <div className="side_img3"></div>
                    </div>
                    <div className="side_image" onClick={imgClick4} style={{border:imgBorder4 , 
                    backgroundImage:`url(${col[3]})`}}>
                        <div className="side_img4"></div>
                    </div>
                </div>
                <div className="main_image" style={{border:imgBorder4 , 
                    backgroundImage:mainImg}}></div>
            </div>
            <div className="info_parent">
                <Product_description name={name} num={num} rate_num={rate_num} stock={stock} description={description} price={price}/>
                <Product_options setCol={setCol}/>
                <div className="product_other"></div>
                <div className="perks_image">               
                </div>
            </div>
        </div>
        <div className="pd_section_parent">
        <div className="pd_bullet">
            <div className="pd_bullet_marker"></div>
            <div className="pd_bullet_name">Related items</div>
            </div>
            <div className="pd_products">
                <Product_card image="./images/controller.png" name="HAVIT HV-G92 Gamepad" discount="40" new_price="100" old_price="160" rate_num="88" rating={4} setCol={setCol}/>
                <Product_card image="./images/keyboard.png" name="AK-900 Wired Keyboard" discount="35" new_price="750" old_price="1160" rate_num="75" rating={4} setCol={setCol}/>
                <Product_card image="./images/display.png" name="IPS LCD Gaming Monitor" discount="25" new_price="280" old_price="400" rate_num="99" rating={5} setCol={setCol}/>
                <Product_card image="./images/keyboard.png" name="AK-900 Wired Keyboard" discount="35" new_price="300" old_price="1160" rate_num="75" rating={4} setCol={setCol}/>
                </div>
            </div>
        </div>
    );
}

function Product_options({setCol}){

    const [border1,setBorder1] = useState(true);
    const [border2,setBorder2] = useState(0);

    function handleClick1(){
        setBorder1(true);
        setBorder2(0);
        setCol(Img_set[0]);
    }

    function handleClick2(){
        setBorder2(true)
        setBorder1(0);
        setCol(Img_set[1]);
    }

    const [col1,setCol1] = useState("white");
    const [col2,setCol2] = useState('black');
    const [col3,setCol3] = useState('black');
    const [col4,setCol4] = useState('black');
    const [col5,setCol5] = useState('black');

    const [backCol1, setbackCol1] = useState("black");
    const [backCol2, setbackCol2] = useState('none');
    const [backCol3, setbackCol3] = useState('none');
    const [backCol4, setbackCol4] = useState('none');
    const [backCol5, setbackCol5] = useState('none');

    function click1(){
        setCol1("white");
        setbackCol1("black");

        setCol2("black");
        setbackCol2("white");
        setCol3("black");
        setbackCol3("white");
        setCol4("black");
        setbackCol4("white");
        setCol5("black");
        setbackCol5("white");    
    }

    function click2(){
        setCol2("white");
        setbackCol2("black");

        setCol1("black");
        setbackCol1("white");
        setCol4("black");
        setbackCol4("white");
        setCol3("black");
        setbackCol3("white");
        setCol5("black");
        setbackCol5("white");    
    }

    function click3(){
        setCol3("white");
        setbackCol3("black");

        setCol1("black");
        setbackCol1("white");
        setCol2("black");
        setbackCol2("white");
        setCol4("black");
        setbackCol4("white");
        setCol5("black");
        setbackCol5("white");    
    }

    function click4(){
        setCol4("white");
        setbackCol4("black");

        setCol1("black");
        setbackCol1("white");
        setCol2("black");
        setbackCol2("white");
        setCol3("black");
        setbackCol3("white");
        setCol5("black");
        setbackCol5("white");    
    }

    function click5(){
        setCol5("white");
        setbackCol5("black");

        setCol1("black");
        setbackCol1("white");
        setCol2("black");
        setbackCol2("white");
        setCol3("black");
        setbackCol3("white");
        setCol4("black");
        setbackCol4("white");    
    }

    const [count,setCount] = useState(1);

    function Increament(){
        if(count==10){
            return;
        }
        setCount(count+1);
    }

    function Decreament(){
        if(count==1){
            return;
        }
        setCount(count-1);
    }
    
    return(
        <div className='options_parent'>
        <div className="options_colorsXYZ"> Colors:
            <div className="options_colXYZ" style={{border:border1,marginLeft: 10}}>
                <div className="options_colXYZ1" onClick={handleClick1}></div>
            </div>
            <div className="options_colXYZ" style={{border:border2}}>
                <div className="options_colXYZ2" onClick={handleClick2}></div>
            </div>
        </div>
        <div className="options_size"> 
            <div className="size_title">Size:</div>
            <div className="size_box" style={{marginLeft: 10, color:col1, backgroundColor: backCol1}} onClick={click1} >XS</div>
            <div className="size_box" onClick={click2} style={{color:col2, backgroundColor: backCol2}}>S</div>
            <div className="size_box" onClick={click3} style={{color:col3, backgroundColor: backCol3}}>M</div>
            <div className="size_box" onClick={click4} style={{color:col4, backgroundColor: backCol4}}>L</div>
            <div className="size_box" onClick={click5} style={{color:col5, backgroundColor: backCol5}}>XL</div>
        </div>
        <div className="options_row3">
            <div className="options_count">
                <div className="sign_box" onClick={Decreament}>
                    <RemoveIcon sx={{height: 17.5, width: 17.5}}/>
                </div>
                <div className="count_box">
                    {count}
                </div>
                <div className="sign_box" onClick={Increament}>
                    <AddIcon sx={{height: 17.5, width: 17.5}}/>
                </div>
            </div>
            <div className="options_button">Buy now</div>
            <div className="fav_parent">
                <div className="fav_inter">
                <Fav/>
                </div>
            </div>
        </div>
        </div>
    );
}

function Product_description({name,num,rate_num,stock,price,description}){

    const [stockStatus, setStockStatus] = useState('red');
    useEffect(() => {
        if (stock === 'In stock') {
          setStockStatus('blue');
        } else {
          setStockStatus('red');
        }
      }, [stock]); 

    return(
        <div className="pd_parent">
            <div className="pd_name">{name}</div>
            <div className="rating_stock">
                <div className="pd_rating">
                    <Rating num={num} rate_num={rate_num} style={{paddingLeft: 0}}/>
                </div>
                <div className="pd_stock" style={{color: stockStatus}}>{stock}</div>
            </div>
            <div className="pd_price">${price}</div>
            <div className="pd_description">{description}</div>
        </div>
    );
}