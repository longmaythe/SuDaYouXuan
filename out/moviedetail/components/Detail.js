import React, { Component } from 'react'
import {Icon} from 'antd'
class Detail extends Component {
    render() {
        return (
            <div className='moviedetail'>
                <div className="moviedetail_header">
                    <div className='moviedetail_goback'>
                    <Icon type="left" />
                    </div>
                    <div className="moviedetail_title">
                        勇敢者游戏2：再战巅峰
                    </div>
                </div>
                <div className="film-poster">
                    <img src="https://pic.maizuo.com/usr/movie/d280b742698b02f1fc1437bf1d9c1873.jpg"/>
                </div>
                <div className="film-detail">
                    <p className="film-category grey-text">动作|冒险</p>
                    <p className="film-premiere-time grey-text">12月13日上映</p>
                    <p className="film-nation-runtime grey-text">美国|分钟</p>
                    <p className="test grey-text">《勇敢者游戏2：再战巅峰》是2017年全球卖座动作冒险巨制《勇敢者游戏：决战丛林》的续篇。四名勇敢者再次穿越回到险象环生的游戏世界中，开启全新冒险。与上次不同的是，变身勇石博士 (道恩·强森 饰) 的是斯宾塞的爷爷，爷爷的好友则变身为语言学家 (凯文· 哈特 饰)，高大威猛的弗里奇变成了中年发福地质学家 (杰克·布莱克 饰)，只有学霸玛莎依旧化身性感打女 (凯伦·吉兰 饰)，斯宾塞和贝瑟尼却不知所踪。为营救消失的伙伴，四人必须进入全面失控的未知世界，面对难度爆表危险重重的致命关卡，强森领队挑战极限玩命闯关。山崩石裂的险境中命悬一线，与突如其来的凶猛野兽死战到底，他们唯有绷紧神经并肩作战，才能通过生死考验逃出生天。一场惊险刺激又充满惊喜的冒险之旅即将展开！</p>
                </div>
                <div className="actors">
                    <div className="actors-title-bar">
                        演职人员
                    </div>
                    <div className="movrow-scroll-wrapper">
                        <ul>
                            <li>
                                <img className="actor_img" src="https://pic.maizuo.com/usr/movie/34e53df73110df0d7637b4843f55668e.jpg?x-oss-process=image/quality,Q_70"/>
                                <span className="actors-name">杰克·卡斯丹</span>
                                <span className="actors-role">导演</span>
                            </li>
                            <li>
                                <img className="actor_img" src="https://pic.maizuo.com/usr/movie/34e53df73110df0d7637b4843f55668e.jpg?x-oss-process=image/quality,Q_70"/>
                                <span className="actors-name">道恩·强森</span>
                                <span className="actors-role">斯莫德·勇石博士</span>
                            </li>
                            <li>
                                <img className="actor_img" src="https://pic.maizuo.com/usr/movie/34e53df73110df0d7637b4843f55668e.jpg?x-oss-process=image/quality,Q_70"/>
                                <span className="actors-name">道恩·强森</span>
                                <span className="actors-role">斯莫德·勇石博士</span>
                            </li>
                            <li>
                                <img className="actor_img" src="https://pic.maizuo.com/usr/movie/34e53df73110df0d7637b4843f55668e.jpg?x-oss-process=image/quality,Q_70"/>
                                <span className="actors-name">道恩·强森</span>
                                <span className="actors-role">斯莫德·勇石博士</span>
                            </li>
                            <li>
                                <img className="actor_img" src="https://pic.maizuo.com/usr/movie/34e53df73110df0d7637b4843f55668e.jpg?x-oss-process=image/quality,Q_70"/>
                                <span className="actors-name">道恩·强森</span>
                                <span className="actors-role">斯莫德·勇石博士</span>
                            </li>
                            <li>
                                <img className="actor_img" src="https://pic.maizuo.com/usr/movie/34e53df73110df0d7637b4843f55668e.jpg?x-oss-process=image/quality,Q_70"/>
                                <span className="actors-name">道恩·强森</span>
                                <span className="actors-role">斯莫德·勇石博士</span>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <div className="photos">
                    <div className="photos-title-bar">
                        <span className="photos-title-text">剧照</span>
                        <span className="photos-to-all">
                            全部（5）
                            <Icon type="right" />
                        </span>
                    </div>
                    <div className="movrow-scroll-wrapper photos-list">
                        <ul>
                            <li>
                                <div className="pho_img">
                                    <img src="https://pic.maizuo.com/usr/2019/1a7c120c17c061b3167750897e47aba0.jpg?x-oss-process=image/quality,Q_70"/>
                                </div>
                            </li>
                            <li>
                                <div className="pho_img">
                                    <img src="https://pic.maizuo.com/usr/2019/d4f17f10de905d2f7e610b129807f486.jpg?x-oss-process=image/quality,Q_70"/>
                                </div>
                            </li>
                            <li>
                                <div className="pho_img">
                                    <img src="https://pic.maizuo.com/usr/2019/d4f17f10de905d2f7e610b129807f486.jpg?x-oss-process=image/quality,Q_70"/>
                                </div>
                            </li>
                            <li>
                                <div className="pho_img">
                                    <img src="https://pic.maizuo.com/usr/2019/d4f17f10de905d2f7e610b129807f486.jpg?x-oss-process=image/quality,Q_70"/>
                                </div>
                            </li>
                            <li>
                                <div className="pho_img">
                                    <img src="https://pic.maizuo.com/usr/2019/d4f17f10de905d2f7e610b129807f486.jpg?x-oss-process=image/quality,Q_70"/>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="goSchedule">
                    选座购票
                </div>
            </div>
        )
    }
}

export default Detail