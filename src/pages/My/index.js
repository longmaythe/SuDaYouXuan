import React ,{Component} from 'react'
import '../../assets/css/my.css'
class My extends Component{
    render(){
        return (

            <div className="parent">
                <div className="myHeader">
                    <img src="https://image.baidu.com/search/down?tn=download&ipn=dwnl&word=download&ie=utf8&fr=result&url=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20191108%2Ff1e51caae0a8405bad8660fac921f01c.jpeg&thumburl=https%3A%2F%2Fss2.bdstatic.com%2F70cFvnSh_Q1YnxGkpoWK1HF6hhy%2Fit%2Fu%3D415634716%2C2806993510%26fm%3D11%26gp%3D0.jpg"/>
                    立即登录
                </div>
                <div className="assets">
                    <div>
                        <div><span>0.00</span>元</div>
                        <div>余额</div>
                    </div>
                    <div>
                        <div><span>0</span>张</div>
                        <div>苏打卷</div>
                    </div>
                    <div>
                        <div><span>0</span>张</div>
                        <div>现金卷</div>
                    </div>
                </div>
  
                <div className="my-order">
                    我的订单
                    <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3737140371,2114993586&fm=15&gp=0.jpg"></img>
                </div>
   
                <div>

                </div>
            </div>
        )
    }
}
export default My