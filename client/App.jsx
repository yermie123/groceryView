import React, { Component } from 'react';
import Grouper from './components/grouper.jsx';
import './components/styles.scss';

let info = [
    {
        pic: "https://www.cheerios.com/wp-content/uploads/2021/11/Honey-Nut-Cheerios_460x460.png",
        deets: "Honey Nut Cheerios",
        link: "/secret"
    },
    {
        pic: "https://www.honeybunchesofoats.com/wp-content/uploads/2019/09/HBO_Box_2_A.png",
        deets: "Honey Bunches of Oats - With Almonds",
        link: "/secret"   
    },
    {
        pic: "https://specialtyproduce.com/sppics/7843.png",
        deets: "Russet Potatoes",
        link: "/secret"
    }
];
// console.log(info[0]);
class App extends Component {


    render(){
        const items = [];
        for(let i = 0; i < info.length; i++){
            items.push(<Grouper key={i} pic={info[i].pic} deets={info[i].deets} link={info[i].link} />);
        }
        console.log(items);
        return (
            <div>
                {items}
            </div>
        )   
    }
};

export default App;