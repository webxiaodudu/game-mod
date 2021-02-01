import style from './index.module.css'

function DownLoad(props){
    return <div className={style.downLoad}>
        <div className={style.imgWrap}>
            <img src={require('@/asset/images/0199.jpg').default} />
        </div>
        <div className={style.btnGroup}>
            <a href="javscript:;" className={style.downloadBtn}>下载</a>
            <a href="javscript:;" className={style.downPassWord}>密码：123456</a>
        </div>
    </div>
}
export default DownLoad;