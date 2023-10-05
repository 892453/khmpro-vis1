import {React, useEffect, useState} from "react";
import ReactTooltip from 'react-tooltip';
import { Tooltip } from 'antd';
import "./keyboard.css";
import { getdata } from "./service/api";

function App2() {

    const colorlist = ["#9DEF91", "#A7D883","#B2BC72","#BDA262","#C78953","#D17144","#DB5936","#E63C25","#EF2516","#FB0F17"];
    const [keyboarddata2, setKeyboarddata2] = useState({})


    // function getmycolor(keyboarddata, onedata){
    //     const maxdata = Math.max(...Object.values(keyboarddata));
    //     const mindata = Math.min(...Object.values(keyboarddata));
    //     console.log(maxdata,mindata);
    // }
    function modify(keyboarddata) {
        // console.log(colorlist[Math.floor((keyboarddata["del"] / 100) % 10)],Math.floor(keyboarddata["del"] / 100)%10,colorlist[Math.floor(keyboarddata["del"] / 100)%10]);
        const maxdata = Math.max(...Object.values(keyboarddata));
        const mindata = Math.min(...Object.values(keyboarddata));
        const chavalue = maxdata- mindata;
        {/* 键盘第一行 14 */ }
        document.querySelector("#esc").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["esc"]/chavalue * 10))]);
        document.querySelector("#btn1").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btn1"] / 100) % 10)]);
        document.querySelector("#btn2").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btn2"] / 100) % 10)]);
        document.querySelector("#btn3").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btn3"] / 100) % 10)]);
        document.querySelector("#btn4").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btn4"] / 100) % 10)]);
        document.querySelector("#btn5").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btn5"] / 100) % 10)]);
        document.querySelector("#btn6").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btn6"] / 100) % 10)]);
        document.querySelector("#btn7").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btn7"] / 100) % 10)]);
        document.querySelector("#btn8").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btn8"] / 100) % 10)]);
        document.querySelector("#btn9").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btn9"] / 100) % 10)]);
        document.querySelector("#btn10").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btn10"] / 100) % 10)]);
        document.querySelector("#btn11").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btn11"] / 100) % 10)]);
        document.querySelector("#btn12").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btn12"] / 100) % 10)]);
        document.querySelector("#del").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["del"]/chavalue * 10))]);
        {/* 键盘第二行 14 */ }
        document.querySelector("#tab").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["tab"] / 100) % 10)]);
        document.querySelector("#btnq").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btnq"] / 100) % 10)]);
        document.querySelector("#btnw").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btnw"] / 100) % 10)]);
        document.querySelector("#btne").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btne"] / 100) % 10)]);
        document.querySelector("#btnr").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btnr"] / 100) % 10)]);
        document.querySelector("#btnt").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btnt"] / 100) % 10)]);
        document.querySelector("#btny").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btny"] / 100) % 10)]);
        document.querySelector("#btnu").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btnu"] / 100) % 10)]);
        document.querySelector("#btni").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btni"] / 100) % 10)]);
        document.querySelector("#btno").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btno"] / 100) % 10)]);
        document.querySelector("#btnp").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btnp"] / 100) % 10)]);
        document.querySelector("#btn13").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btn13"] / 100) % 10)]);
        document.querySelector("#btn14").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btn14"] / 100) % 10)]);
        document.querySelector("#slash").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["slash"] / 100) % 10)]);
        {/* // 键盘第三行 13 */ }
        document.querySelector("#caps").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["caps"] / 100) % 10)]);
        document.querySelector("#btna").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btna"] / 100) % 10)]);
        document.querySelector("#btns").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btns"] / 100) % 10)]);
        document.querySelector("#btnd").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btnd"] / 100) % 10)]);
        document.querySelector("#btnf").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btnf"] / 100) % 10)]);
        document.querySelector("#btng").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btng"] / 100) % 10)]);
        document.querySelector("#btnh").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btnh"] / 100) % 10)]);
        document.querySelector("#btnj").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btnj"] / 100) % 10)]);
        document.querySelector("#btnk").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btnk"] / 100) % 10)]);
        document.querySelector("#btnl").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btnl"] / 100) % 10)]);
        document.querySelector("#btn15").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btn15"] / 100) % 10)]);
        document.querySelector("#btn16").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btn16"] / 100) % 10)]);
        document.querySelector("#enter").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["enter"] / 100) % 10)]);
        {/* // 键盘第四行 13 */ }
        document.querySelector("#shift").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["shift"] / 100) % 10)]);
        document.querySelector("#btnz").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btnz"] / 100) % 10)]);
        document.querySelector("#btnx").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btnx"] / 100) % 10)]);
        document.querySelector("#btnc").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btnc"] / 100) % 10)]);
        document.querySelector("#btnv").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btnv"] / 100) % 10)]);
        document.querySelector("#btnb").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btnb"] / 100) % 10)]);
        document.querySelector("#btnn").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btnn"] / 100) % 10)]);
        document.querySelector("#btnm").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btnm"] / 100) % 10)]);
        document.querySelector("#btn17").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btn17"] / 100) % 10)]);
        document.querySelector("#btn18").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btn18"] / 100) % 10)]);
        document.querySelector("#btn19").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["btn19"] / 100) % 10)]);
        document.querySelector("#shift2").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["shift2"] / 100) % 10)]);
        document.querySelector("#up-arrow").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["up-arrow"] / 100) % 10)]);
        {/* // 键盘第五行 10 */ }
        document.querySelector("#ctrl").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["ctrl"] / 100) % 10)]);
        document.querySelector("#fn").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["fn"] / 100) % 10)]);
        document.querySelector("#win").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["win"] / 100) % 10)]);
        document.querySelector("#alt").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["alt"] / 100) % 10)]);
        document.querySelector("#space").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["space"] / 100) % 10)]);
        document.querySelector("#altgr").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["altgr"] / 100) % 10)]);
        document.querySelector("#menu").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["menu"] / 100) % 10)]);
        document.querySelector("#left-arrow").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["left-arrow"] / 100) % 10)]);
        document.querySelector("#ctrl2").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["ctrl2"] / 100) % 10)]);
        document.querySelector("#down-arrow").setAttribute("style", "background:" + colorlist[Math.floor((keyboarddata["down-arrow"] / 100) % 10)]);
    }
    useEffect(()=>{
        try{
            getdata().then((msg)=>{
                 console.log("msg:",msg.data);
                 modify(msg.data);
                 setKeyboarddata2(msg.data);
             }); 
         }catch(e){
             console.log(e);
         }
    },[])

    return (
        <div className="body">
            <ReactTooltip></ReactTooltip>
                <div className="keyboard">
                    {/* 键盘第一行 14 */}
                    
                    <ul className="row">
                        <li className="key clay" id="esc" data-tip={"count: "+keyboarddata2["esc"]} data-event="click">~</li>
                        <li className="key clay" id="btn1" data-tip={"count: "+keyboarddata2["btn1"]} data-event="click">1</li>
                        <li className="key clay" id="btn2" data-tip={"count: "+keyboarddata2["btn2"]} data-event="click">2</li>
                        <li className="key clay" id="btn3" data-tip={"count: "+keyboarddata2["btn3"]} data-event="click">3</li>
                        <li className="key clay" id="btn4" data-tip={"count: "+keyboarddata2["btn4"]} data-event="click">4</li>
                        <li className="key clay" id="btn5" data-tip={"count: "+keyboarddata2["btn5"]} data-event="click">5</li>
                        <li className="key clay" id="btn6" data-tip={"count: "+keyboarddata2["btn6"]} data-event="click">6</li>
                        <li className="key clay" id="btn7" data-tip={"count: "+keyboarddata2["btn7"]} data-event="click">7</li>
                        <li className="key clay" id="btn8" data-tip={"count: "+keyboarddata2["btn8"]} data-event="click">8</li>
                        <li className="key clay" id="btn9" data-tip={"count: "+keyboarddata2["btn9"]} data-event="click">9</li>
                        <li className="key clay" id="btn10" data-tip={"count: "+keyboarddata2["btn10"]} data-event="click">0</li>
                        <li className="key clay" id="btn11" data-tip={"count: "+keyboarddata2["btn11"]} data-event="click">-</li>
                        <li className="key clay" id="btn12" data-tip={"count: "+keyboarddata2["btn12"]} data-event="click">=</li>
                        <li className="key clay" id="del" data-tip={"count: "+keyboarddata2["del"]} data-event="click">Back</li>
                    </ul>
                    {/* <!-- 键盘第二行14  --> */}
                    <ul className="row">
                        <li data-tip={"count: "+keyboarddata2["tab"]} data-event="click" className="key clay" id="tab">Tab</li>
                        <li className="key clay" id="btnq" data-tip={"count: "+keyboarddata2["btnq"]} data-event="click">Q</li>
                        <li className="key clay" id="btnw" data-tip={"count: "+keyboarddata2["btnw"]} data-event="click">W</li>
                        <li className="key clay" id="btne" data-tip={"count: "+keyboarddata2["btne"]} data-event="click">E</li>
                        <li className="key clay" id="btnr" data-tip={"count: "+keyboarddata2["btnr"]} data-event="click">R</li>
                        <li className="key clay" id="btnt" data-tip={"count: "+keyboarddata2["btnt"]} data-event="click">T</li>
                        <li className="key clay" id="btny" data-tip={"count: "+keyboarddata2["btny"]} data-event="click">Y</li>
                        <li className="key clay" id="btnu" data-tip={"count: "+keyboarddata2["btnu"]} data-event="click">U</li>
                        <li className="key clay" id="btni" data-tip={"count: "+keyboarddata2["btni"]} data-event="click">I</li>
                        <li className="key clay" id="btno" data-tip={"count: "+keyboarddata2["btno"]} data-event="click">O</li>
                        <li className="key clay" id="btnp" data-tip={"count: "+keyboarddata2["btnp"]} data-event="click">P</li>
                        <li className="key clay" id="btn13" data-tip={"count: "+keyboarddata2["btn13"]} data-event="click">[</li>
                        <li className="key clay" id="btn14" data-tip={"count: "+keyboarddata2["btn14"]} data-event="click">]</li>
                        <li className="key clay" id="slash" data-tip={"count: "+keyboarddata2["slash"]} data-event="click">\</li>
                    </ul>
                    {/* // 键盘第三行 13 */}
                    <ul className="row">
                        <li className="key clay" id="caps" data-tip={"count: "+keyboarddata2["caps"]} data-event="click">Caps</li>
                        <li className="key clay" id="btna" data-tip={"count: "+keyboarddata2["btna"]} data-event="click">A</li>
                        <li className="key clay" id="btns" data-tip={"count: "+keyboarddata2["btns"]} data-event="click">S</li>
                        <li className="key clay" id="btnd" data-tip={"count: "+keyboarddata2["btnd"]} data-event="click">D</li>
                        <li className="key clay" id="btnf" data-tip={"count: "+keyboarddata2["btnf"]} data-event="click">F</li>
                        <li className="key clay" id="btng" data-tip={"count: "+keyboarddata2["btng"]} data-event="click">G</li>
                        <li className="key clay" id="btnh" data-tip={"count: "+keyboarddata2["btnh"]} data-event="click">H</li>
                        <li className="key clay" id="btnj" data-tip={"count: "+keyboarddata2["btnj"]} data-event="click">J</li>
                        <li className="key clay" id="btnk" data-tip={"count: "+keyboarddata2["btnk"]} data-event="click">K</li>
                        <li className="key clay" id="btnl" data-tip={"count: "+keyboarddata2["btnl"]} data-event="click">L</li>
                        <li className="key clay" id="btn15" data-tip={"count: "+keyboarddata2["btn15"]} data-event="click">;</li>
                        <li className="key clay" id="btn16" data-tip={"count: "+keyboarddata2["btn16"]} data-event="click">'</li>
                        <li className="key clay" id="enter" data-tip={"count: "+keyboarddata2["enter"]} data-event="click">Enter</li>
                    </ul>
                    {/* // 键盘第四行 13 */}
                    <ul className="row">
                        <li className="key clay" id="shift" data-tip={"count: "+keyboarddata2["shift"]} data-event="click">🛹Shift</li>
                        <li className="key clay" id="btnz" data-tip={"count: "+keyboarddata2["btnz"]} data-event="click">Z</li>
                        <li className="key clay" id="btnx" data-tip={"count: "+keyboarddata2["btnx"]} data-event="click">X</li>
                        <li className="key clay" id="btnc" data-tip={"count: "+keyboarddata2["btnc"]} data-event="click">C</li>
                        <li className="key clay" id="btnv" data-tip={"count: "+keyboarddata2["btnv"]} data-event="click">V</li>
                        <li className="key clay" id="btnb" data-tip={"count: "+keyboarddata2["btnb"]} data-event="click">B</li>
                        <li className="key clay" id="btnn" data-tip={"count: "+keyboarddata2["btnn"]} data-event="click">N</li>
                        <li className="key clay" id="btnm" data-tip={"count: "+keyboarddata2["btnm"]} data-event="click">M</li>
                        <li className="key clay" id="btn17" data-tip={"count: "+keyboarddata2["btn17"]} data-event="click">,</li>
                        <li className="key clay" id="btn18" data-tip={"count: "+keyboarddata2["btn18"]} data-event="click">.</li>
                        <li className="key clay" id="btn19" data-tip={"count: "+keyboarddata2["btn19"]} data-event="click">/</li>
                        <li className="key clay" id="shift2" data-tip={"count: "+keyboarddata2["shift2"]} data-event="click">🛹Shift</li>
                        <li className="key clay" id="up-arrow" data-tip={"count: "+keyboarddata2["up-arrow"]} data-event="click">☝️</li>
                    </ul>
                    {/* // 键盘第五行 10*/}
                    <ul className="row">
                        <li className="key clay" id="ctrl" data-tip={"count: "+keyboarddata2["ctrl"]} data-event="click">Ctrl</li>
                        <li className="key clay" id="fn" data-tip={"count: "+keyboarddata2["fn"]} data-event="click">🎪</li>
                        <li className="key clay" id="win" data-tip={"count: "+keyboarddata2["win"]} data-event="click">Win</li>
                        <li className="key clay" id="alt" data-tip={"count: "+keyboarddata2["alt"]} data-event="click">Alt</li>
                        <li className="key clay" id="space" data-tip={"count: "+keyboarddata2["space"]} data-event="click"></li>
                        <li className="key clay" id="altgr" data-tip={"count: "+keyboarddata2["altgr"]} data-event="click">Alt</li>
                        <li className="key clay" id="menu" data-tip={"count: "+keyboarddata2["menu"]} data-event="click">🌶️</li>
                        <li className="key clay" id="ctrl2" data-tip={"count: "+keyboarddata2["ctrl2"]} data-event="click">Ctrl</li>
                        <li className="key clay" id="left-arrow" data-tip={"count: "+keyboarddata2["left-arrow"]} data-event="click">👈🏿</li>
                        <li className="key clay" id="down-arrow" data-tip={"count: "+keyboarddata2["down-arrow"]} data-event="click">👇🏻</li>
                    </ul>
                </div>
                {/* <Tooltip title={keyboarddata["btn1"]} placement="top"><Button>asdsa</Button></Tooltip> */}
        </div>
    )

}
export default App2;