import { Timeline } from 'antd';

export default function MyResume() {
    return (
        <div id="resume" className="block aboutBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>WORKING EXPERIENCE</h2>
                </div>
                <Timeline mode={'left'}>
                    <Timeline.Item label="2017/02 - 2020/07">
                        <b>Geographer(freelance)</b>
                        <br />
                        Survey department
                        <br />
                        <br />
                        <br />
                    </Timeline.Item>
                    <Timeline.Item label="2015/04 - 2015/09">
                        <b>Geographer </b>
                        <br />
                        Royal Project in Chiang Mai
                        <br />
                        <p>Explore and create maps</p>
                        <br />
                        <br />
                        <br />
                    </Timeline.Item>
                </Timeline>
                <div className="titleHolder">
                    <h2>EDUCATION</h2>
                </div>
                <Timeline mode={'left'}>
                <Timeline.Item label="2020/06 - 2021/02">
                        <b>Software Park Thailand Code Camp </b>
                        <br />
                        Fullstack Javascript Developer [online 6]
                        <br />
                        <br />
                        <br />
                        <br />
                    </Timeline.Item>
                    <Timeline.Item label="2013/06 - 2016/12">
                        <b>Faculty of Social Sciences Geography</b>
                        <br />
                            Chiang Mai University
                        <br />
                        <br />
                        <br />
                    </Timeline.Item>              
                </Timeline>
            </div>
        </div>
    )
}
