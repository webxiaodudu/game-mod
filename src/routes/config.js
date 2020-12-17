import IndexPage from '../pages/home'
import Undefined from '../pages/404'
import Modpage from '../pages/modpage'
import Strategy from '../pages/strategy'
import Comment from '../pages/comment'
const routes = [
    //首页
    {
      path: ["/",'/home','/index'],
      exact: true,
      render(props) {
        return <IndexPage {...props} />
      }
    },
    //Mod合集
   {
      path: '/modpage',
      exact: false,
      render(props) {
        return <Modpage {...props} />
      }
   },
   //攻略
   {
        path: '/strategy',
        exact: false,
        render(props) {
          return <Strategy {...props} />
        }
    },
    //社区
    {
      path: '/comment',
      exact: false,
      render(props) {
        return <Comment {...props} />
      }
    },
    //404
    {
      path: "",
      exact: false,
      render(props) {
        return <Undefined {...props} />
      }
    }
  ]
  export default routes