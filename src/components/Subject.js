import React, { Component } from 'react';

// 컴포넌트 (정리정돈 도구)
class Subject extends Component {
    // render 함수가 반드시 있어야 함
    // 속성(props) : {this.props.[이름]} (아래 App 컴포넌트에 적어놓은 이름과 같게 해야 함)
    render() {
        return (
            // 반드시 하나의 최상위 태그만 사용해야 함
            <header>
                <h1><a href="/" onClick={function (e) {
                    e.preventDefault(); // a 태그의 기본적인 동작을 금지 (WEB을 클릭했을 때 리로드되는 것을 막음)
                    this.props.onChangePage(); // App.js에서 선언한 onChangePage 함수를 실행
                }.bind(this)}>{this.props.title}</a></h1>
                {this.props.sub}
            </header>
        );
    }
}

export default Subject;