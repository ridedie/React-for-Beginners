import React from "react";


//<Food fav="kimchi" /> = props
//props는 object {a: "hello", b:"bye"} 이게 {fav: "kimchi"} 적용
//props는 food의 첫 번째 argument로 간다
function Food({fav, picture}) {
  return (
    <div>
      <h2>I Like {fav}</h2>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
  },
  {
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
  },
  {
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  {
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
  }
];

//map은 array의 각 item에서 function을 실행하는 array를 가지는 js함수
//그 함수의 결과값 즉 내가 원했던 새로운 array를 준다

function App() {
  return (
    <div>
      {foodILike.map(dish => <Food fav={dish.name} picture={dish.image}/>)}
    </div>
  );
}
export default App;