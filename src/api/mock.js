import Mock from 'mockjs'

Mock.mock('/productlist',{
    'listinfo':[
      {
        img:require("../assets/img/list-eat3.jpg"),
        title:'鸡爪 零食 精品零食 特价',
        sale:"包邮|第二件9.9",
        tag:"shanyao"
      },
      {
        img:require("../assets/img/list-eat4.jpg"),
        title:'虾条 韩国',
        sale:"包邮|第二件9.9",
        tag:"shanyao"
      },
      {
        img:require("../assets/img/list-eat5.jpg"),
        title:'山药薄片 零食',
        sale:"包邮|第二件9.9",
        tag:"shanyao"
      },
      {
        img:require("../assets/img/list-eat6.jpg"),
        title:'香浓糕点 奶香 烘焙',
        sale:"包邮|第二件9.9",
        tag:"shanyao"
      },
      {
        img:require("../assets/img/list-eat7.jpg"),
        title:'零食大礼包',
        sale:"包邮|第二件9.9",
        tag:"shanyao"
      },
      {
        img:require("../assets/img/list-eat8.jpg"),
        title:'沙琪玛',
        sale:"包邮|第二件9.9",
        tag:"shaqima"
      },
    ],
  }
);

Mock.mock('/productdetails',{
    'shanyao':[
         require("../assets/img/details1.jpg"),
         require("../assets/img/details2.jpg"),
         require("../assets/img/details3.jpg"),
         require("../assets/img/details4.jpg"),
         require("../assets/img/details5.jpg"),
    ],
    'shaqima':[
          require("../assets/img/details6.jpg"),
          require("../assets/img/details7.jpg"),
          require("../assets/img/details8.jpg"),
          require("../assets/img/details9.jpg"),
          require("../assets/img/details10.jpg")
    ]
  }
)

