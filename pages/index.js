import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import styles from "../styles/Home.module.scss"
import Aos from "aos";
import { UPDATE_STATE } from '../redux/types/constants';

export default function Home() {
    const [random , setRandom] = useState()
    const  [people , setPeople] = useState(100);
    const {randomData} = useSelector(state => state.home)
    const dispatch = useDispatch()
    function People (){
        setPeople(prompt("Number of people", '123'));
    }
    function OnRandom(){
        const date = new Date();
        let ran = parseInt(Number((date.getTime()*Math.random())%(people - 1)) + Number(1));;
        console.log(randomData.find(item => item.id == ran)); 
        // typeof randomData.find(item => item.id == ran) ==! "undefined"  &&
        if( randomData.length < 7  ){
        let data1 = randomData;
        data1.push({choose: random});
        dispatch({type: UPDATE_STATE , data: {randomData: data1}})
        setRandom(ran);
        } else{
            setRandom(null)
        }
    }
    useEffect(() => {
        Aos.init({
          duration : 1000
        });
      }, []);
    
    return (
        <div className={styles.home} >
            <div className={styles.navbar}>
                <button className={styles.navbarBtn} onClick = {()=>People()} >
                    Number of people
                </button>
                <div className={styles.RandomValues}>
                {
                    randomData.map((Value, index)=>{
                        return(
                            <h2 data-aos="fade-left" className={styles.titles} key = {index}>
                                {Value.choose}
                            </h2>
                        )
                    })
                }
                </div>
            </div>
                <div className={styles.contentTitle}>
                    <h1 className={styles.RandomTitle}>
                        {random} 
                    </h1>
                </div>
                   <div className={styles.ChooseContent}>
                    <button className={styles.ChooseBtn} type='button' onClick={()=>OnRandom()}>
                            Random
                    </button>
                    </div>           
        </div>  
    )
}


