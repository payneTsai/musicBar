/**
 * Created by Administrator on 2017/5/4.
 */
var React = require('react');
import { Layout ,Menu ,Input, Row, Col,Icon  } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const Search = Input.Search;
import userPng from '../img/user.png';
import {Router,Route,IndexRoute,Link,hashHistory } from 'react-router';

var TopBar = React.createClass({
    handleSearch : function (e) {
        var keyword = e.target.value;
        window.location.href="http://localhost:8080/index.html#/search/"+keyword+"?_k=yaivfb";
    },
    render : function () {
        return (
            <div>
                <Layout>
                    <Header style={{backgroundColor: 'white'}}>
                        <Row>
                            <Col span="2" offset="2">
                                <h3>Renaissance</h3>
                            </Col>
                            <Col span="10" offset="2">
                                <Menu
                                    theme="white"
                                    mode="horizontal"
                                    defaultSelectedKeys={['1']}
                                    style={{ lineHeight: '60px',fontSize: '16px',border: 'none' }}
                                >
                                    <Menu.Item key="1">
                                        <Link to="/">首页</Link>
                                    </Menu.Item>
                                    <Menu.Item key="2">
                                        <Link to="musicInfo/464192841">排行榜</Link>
                                    </Menu.Item>
                                    <Menu.Item key="3">
                                        <Link to="search/july">歌手</Link>
                                    </Menu.Item>
                                    <Menu.Item key="4">
                                        <Link to="signIn">歌单</Link>
                                    </Menu.Item>
                                    <Menu.Item key="5">
                                        <Link to="circle">音乐圈</Link>
                                    </Menu.Item>
                                    <Menu.Item key="6"><Link to="about">关于我们</Link></Menu.Item>
                                </Menu>
                            </Col>
                            <Col span="4">
                                <Search
                                    placeholder="troye sivan" onSearch={value => window.location.href="http://localhost:8080/index.html#/search/"+value+"?_k=yaivfb"}
                                />
                            </Col>
                            <Col span="2" offset="2" >
                                <Link to="user">
                                    <img src={userPng} style={{width:'35px',height:'35px',verticalAlign:'middle'}} />
                                </Link>
                            </Col>
                        </Row>
                    </Header>
                </Layout>
            </div>
        );
    }
});

module.exports = TopBar;