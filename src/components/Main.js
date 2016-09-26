require('normalize.css/normalize.css');
require('styles/App.scss');
/*引入json－loader modified by xuwl 2016.09.24*/
/*获取图片相关的数据*/
import React from 'react';
var imageDatas = require('../data/imageDatas.json');

let yeomanImage = require('../images/yeoman.png');
/*利用自执行函数，将图片名信息转换成图片url路径信息！*/
imageDatas = (function getImageURL(imageDatasArr){
	for(var i=0,j=imageDatasArr.length; i <j ; i++){
		var singleImageData = imageDatasArr[i];
		singleImageData.imageURL = require('../images/'+singleImageData.fileName);
		imageDatasArr[i] = singleImageData;	
	}
	return imageDatasArr;
})(imageDatas);

class AppComponent extends React.Component{
  render (){
    return (
      <section className="stage">
            <section className="img-sec">
                111
            </section>
            <nav className="controller-nav">
               2222
            </nav>
        </section>
      );
  }
}


AppComponent.defaultProps = {
};

export default AppComponent;
