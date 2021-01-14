import style from './modList.module.css'
import { List, Card }from 'antd'
const { Meta } =Card
function ModList(){
    const data = [
        {
          title: 'Title 1',
          cover:'images/0026.jpg'
        },
        {
          title: 'Title 2',
          cover:'images/0026.jpg'
        },
        {
          title: 'Title 3',
          cover:'images/0026.jpg'
        },
        {
          title: 'Title 4',
          cover:'images/0026.jpg'
        },
        {
            title: 'Title 4',
            cover:'images/0026.jpg'
        },
        {
            title: 'Title 1',
            cover:'images/0026.jpg'
          },
          {
            title: 'Title 2',
            cover:'images/0026.jpg'
          },
          {
            title: 'Title 3',
            cover:'images/0026.jpg'
          },
          {
            title: 'Title 4',
            cover:'images/0026.jpg'
          },
          {
              title: 'Title 4',
              cover:'images/0026.jpg'

          }
        
      ];
    return <List
             style={{paddingTop:'20px'}}
            grid={{ gutter: 16, column: 5 }}
            dataSource={data}
            renderItem={item => (
            <List.Item>
                <Card
                hoverable
                style={{ width: 240 }}
                 cover={<div className={style.cover} style={{backgroundImage:`url(${item.cover})`}}></div>}
                >
                    <Meta title="Europe Street beat" description={
                        <ul className={style.modItemList}>
                        <li><span>游戏评分：</span><span>5</span></li>
                        <li><span>mod作者：</span><span>{'王牌军'}</span></li>
                        <li><span>上市时间：</span><span>{'2020-12-30'}</span></li>
                        <li><span>原游戏本体：</span><span>{'中世纪2全面战争'}</span></li>
                    </ul>
                    } />
                </Card>
            </List.Item>
            )}
        />
}
export default ModList;