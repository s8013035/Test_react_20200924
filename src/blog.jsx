import React from 'react';
import Article from './Article';
import {Foo, Bar} from './components/FooBar';

// class Blog extends React.Component {
//   // eslint-disable-next-line
//   constructor(props) {
//     super(props);
//     this.state = {
//       isPublished: false,
//       count: 0
//     }
//   }
  const Blog = () => {

  
  //ボタン押下後count
  // componentDidMount() {
  //   document.getElementById('counter').addEventListener('click', this.countUp)
  // }

  // componentDidUpdate() {
  //   if (this.state.count >= 10) {
  //       this.setState({
  //         count: 0
  //       })
  //   }
  // }

  // componentWillUnmount() {
  //   document.getElementById('counter').removeEventListener('click', this.countUp) 
  // }

  //公開状態を反転させる
  // togglePublished = () => {
  //   this.setState( {
  //     isPublished: !this.state.isPublished
  //   })
  // };

  //count増やす
  // countUp = () => {
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  // };

    return (
      <>
        <Article
            title={"山根典子音声研究室"}

//            count={this.state.count}
        />
        <Foo />
        <Bar />

        
      </>
    )
  
};

export default Blog