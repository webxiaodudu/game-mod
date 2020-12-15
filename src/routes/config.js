import IndexPage from '../pages/home'
import Undefined from '../pages/404'
const routes = [
    //首页
    {
      path: ["/",'/home','/index'],
      exact: true,
      render(props) {
        return <IndexPage {...props} />
      }
    },
    //404
    {
      path: "",
      render(props) {
        return <Undefined {...props} />
      }
    }
  ]
  export default routes