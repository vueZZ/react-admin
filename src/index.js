import React from 'react';
import ReactDOM from 'react-dom';

// import { Button, LocaleProvider } from 'antd';
// // 由于 antd 组件的默认文案是英文，所以需要修改为中文
// import zhCN from 'antd/lib/locale-provider/zh_CN';
// import 'antd/dist/antd.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  render() {
    return (
      <div></div>
      // <LocaleProvider locale={zhCN}>
      //   <div>
      //     <Button>ss</Button>
      //   </div>
      // </LocaleProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));