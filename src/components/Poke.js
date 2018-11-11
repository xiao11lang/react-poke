import React, { Component } from 'react'
import p_151 from '../imgs/1_5_1.jpg'
import p_152 from '../imgs/1_5_2.jpg'
import p_171 from '../imgs/1_7_1.jpg'
import p_172 from '../imgs/1_7_2.jpg'
import p_181 from '../imgs/1_8_1.jpg'
import p_182 from '../imgs/1_8_2.jpg'
import p_191 from '../imgs/1_9_1.jpg'
import p_192 from '../imgs/1_9_2.jpg'
import p_201 from '../imgs/2_0_1.jpg'
import p_202 from '../imgs/2_0_2.jpg'
import p_211 from '../imgs/2_1_1.jpg'
import p_212 from '../imgs/2_1_2.jpg'
import p_261 from '../imgs/2_6_1.jpg'
import p_262 from '../imgs/2_6_2.jpg'
import p_271 from '../imgs/2_7_1.jpg'
import p_272 from '../imgs/2_7_2.jpg'
import p_301 from '../imgs/3_0_1.jpg'
import p_302 from '../imgs/3_0_2.jpg'
import p_341 from '../imgs/3_4_1.jpg'
import p_342 from '../imgs/3_4_2.jpg'
import p_361 from '../imgs/3_6_1.jpg'
import p_362 from '../imgs/3_6_2.jpg'
import p_441 from '../imgs/4_4_1.jpg'
import p_442 from '../imgs/4_4_2.jpg'
import p_581 from '../imgs/5_8_1.jpg'
import p_582 from '../imgs/5_8_2.jpg'
import p_621 from '../imgs/6_2_1.jpg'
import p_682 from '../imgs/6_8_2.jpg'
import p_721 from '../imgs/7_2_1.jpg'
import p_722 from '../imgs/7_2_2.jpg'
import p_832 from '../imgs/8_3_2.jpg'
import p_861 from '../imgs/8_6_1.jpg'
let imgs=[p_151,p_152,p_171,p_172,p_181,p_182,p_191,p_192,p_201,p_202,p_211,p_212,
p_261,p_262,p_271,p_272,p_301,p_302,p_341,p_342,p_361,p_362,p_441,p_442,p_581,p_582,
p_621,p_682,p_721,p_722,p_861,p_832];

export default class Poke extends Component {
    
  render() {
    let pics=[];
    for(let i=0;i<32;i++){
      pics.push(<img alt='none' key={i} src={imgs[i]} style={{display:this.props.activeIndex===i?'block':'none'}}/>)
    }
    return (
      <div className='pokeCon'>
        {pics}
      </div>
    )
  }
}
