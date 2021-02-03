import { Comment, Tooltip, List,Pagination } from 'antd';

import moment from 'moment';
import ActionCom from './action'
import {Provider} from '../../context'
import {useState} from 'react'
function CommentList(){
    const [current,setCurrent] = useState('1')
    const onChange = (page)=>{
      setCurrent(page)
    }


    const data = [
        {
          
          actions: [<ActionCom commId='112'/>],
          author: 'Han Solo',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content: (
            <p>
              We supply a series of design principles, practical patterns and high quality design
              resources (Sketch and Axure), to help people create their product prototypes beautifully and
              efficiently.
            </p>
          ),
          datetime: (
            <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
              <span>{moment().subtract(1, 'days').fromNow()}</span>
            </Tooltip>
          ),
          children:[
            {
                
                actions: [<ActionCom commId='123'/>],
                author: 'wwww',
                avatar: 'https://images.ali213.net/picfile/pic/2015/04/01/120X90_2015040141603168.png',
                content: (
                  <p>
                    We supply a series of design principles, practical patterns and high quality design
                    resources (Sketch and Axure), to help people create their product prototypes beautifully and
                    efficiently.
                  </p>
                ),
                datetime: (
                  <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().subtract(2, 'days').fromNow()}</span>
                  </Tooltip>
                ),
              },
              {
                
                actions: [<ActionCom commId='124' />],
                author: 'ccc',
                avatar: 'https://images.ali213.net/picfile/pic/2015/04/01/120X90_2015040141603168.png',
                content: (
                  <p>
                    We supply a series of design principles, practical patterns and high quality design
                    resources (Sketch and Axure), to help people create their product prototypes beautifully and
                    efficiently.
                  </p>
                ),
                datetime: (
                  <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().subtract(2, 'days').fromNow()}</span>
                  </Tooltip>
                ),
              }
          ]
        },
        {
            
          actions: [<ActionCom commId="125"/>],
          author: 'wwww',
          avatar: 'https://images.ali213.net/picfile/pic/2015/04/01/120X90_2015040141603168.png',
          content: (
            <p>
              We supply a series of design principles, practical patterns and high quality design
              resources (Sketch and Axure), to help people create their product prototypes beautifully and
              efficiently.
            </p>
          ),
          datetime: (
            <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
              <span>{moment().subtract(2, 'days').fromNow()}</span>
            </Tooltip>
          ),
        },
      ];

      const getList = (data)=>{
             return (
                <List
                className="comment-list"
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                <li>
                    <Comment
                    actions={item.actions}
                    author={item.author}
                    avatar={item.avatar}
                    content={item.content}
                    datetime={item.datetime}
                   
                    >
                        {item.children&&getList(item.children)}
                    </Comment>
                    
                </li>
                )}
            />
             )   
      }
    return <div>
           {getList(data)}
           <p style={{textAlign:'center',marginTop:'20px'}}>
             <Pagination
              current={current} 
              onChange={onChange}
               total={50}
            />
          </p>
        </div>
}
export default CommentList