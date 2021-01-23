import IndexPage from '../pages/home'
import Undefined from '../pages/404'
import Modpage from '../pages/modpage'
import ModDetail from '@/pages/modDetail'
import Strategy from '../pages/strategy'
import Comment from '../pages/comment'
import Regesiter from '../pages/regesiter'
import PcgamePage from '@/pages/pcgame'
import PcGameDetail from '@/pages/pcDetail'
const routes = [
    //首页
    {
      path: ["/",'/home','/index'],
      exact: true,
      render(props) {
        return <IndexPage {...props} />
      }
    },
    //单机游戏
    {
      path: '/pcgame',
      exact: false,
      render(props) {
        return <PcgamePage {...props} />
      }
   },
   {
     path:'/pcgameDetail/:id',
     exact:false,
     render(props){
       return <PcGameDetail {...props}/>
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
   //Mod详情
   {
    path: '/modDetail/:id',
    exact: false,
    render(props) {
      return <ModDetail {...props} />
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
    //注册页
    {
      path: '/regesiter',
      exact: false,
      render(props) {
        return <Regesiter {...props} />
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