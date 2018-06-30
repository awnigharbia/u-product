import React, {Component, Fragment} from 'react'
import {Breadcrumb, Icon, Layout,Table, Input, Button} from 'antd'

const {Content, Header} = Layout

export default class Orders extends Component {
    state = {
        filterDropdownVisible: false,
        searchText: '',
        filtered: false,
      };
      
      onInputChange = (e) => {
        this.setState({ searchText: e.target.value });
      }

      onSearch = () => {
        const { searchText } = this.state;
        const reg = new RegExp(searchText, 'gi');
        this.setState({
          filterDropdownVisible: false,
          filtered: !!searchText,
          data: this.props.data.map((record) => {
            const match = record.name.match(reg);
            if (!match) {
              return null;
            }
            return {
              ...record,
              name: (
                <span>
                  {record.name.split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i')).map((text, i) => (
                    text.toLowerCase() === searchText.toLowerCase() ?
                      <span key={i} className="highlight">{text}</span> : text // eslint-disable-line
                  ))}
                </span>
              ),
            };
          }).filter(record => !!record),
        });
      }
    render() {
       
  
        const columns = [
            {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            filterDropdown: (
              <div className="custom-filter-dropdown">
                <Input
                  ref={ele => this.searchInput = ele}
                  placeholder="Search name"
                  value={this.state.searchText}
                  onChange={this.onInputChange}
                  onPressEnter={this.onSearch}
                />
                <Button type="primary" onClick={this.onSearch}>Search</Button>
              </div>
            ),
            filterIcon: <Icon type="search" style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }} />,
            filterDropdownVisible: this.state.filterDropdownVisible,
            onFilterDropdownVisibleChange: (visible) => {
              this.setState({
                filterDropdownVisible: visible,
              }, () => this.searchInput && this.searchInput.focus());
            },
          }, 
          {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
          },
          {
            title: 'Lang',
            dataIndex: 'project[0].lang',
            key: 'project[0].lang',
          }, 
          {
            title: 'Univ',
            dataIndex: 'uni',
            key: 'uni',
          },
          {
            title: 'Address',
            dataIndex: 'city',
            key: 'city',
            filters: [{
              text: 'Gaza',
              value: 'Gaza',
            }, 
        ],
            onFilter: (value, record) => {
              const city = record.city || " "
              return city.indexOf(value) === 0
            },
          },
          {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: ({key}) => <a href="/admin/">Open</a>,
          },
        ];

        return (
            <Fragment>
            <Header style={{ display:'flex', flexDirection:'row',alignItems:'center', background: '#fff', padding: 0 }}>
            <Breadcrumb style={{marginLeft:'20px'}}>
                <Breadcrumb.Item href="">
                    <Icon type="home" />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="">
                <Icon type="user" />
                    <span>Panel</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    Orders
                </Breadcrumb.Item>
            </Breadcrumb>
            </Header>
            <Content style={{ margin: '24px 16px 0' }}>        
              <Table columns={columns} loading={this.props.loading} rowKey="id" expandedRowRender={record => record.project[0] !== undefined ?  <p style={{ margin: 0 }}>{record.project[0].description}</p> : "No Projects yet"} dataSource={this.props.data} />
          </Content>
        </Fragment>
        )
    }
}


