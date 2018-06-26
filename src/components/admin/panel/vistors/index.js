import React, {Component, Fragment} from 'react'
import {Breadcrumb, Icon, Layout,Table, Input, Button} from 'antd'
const {Content, Header} = Layout

const data = [
{
  key: '1',
  IP: 'John Bron',
  Browser:'awni2009@hotmail.com',
  OS: 'Al-Azhar Univ',
  address: 'New York No. 1 Lake Park',
  user_agent:'New York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake Park'
},
];


export default class Vistors extends Component {
    state = {
        filterDropdownVisible: false,
        data,
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
          data: data.map((record) => {
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
            title: 'IP',
            dataIndex: 'IP',
            key: 'IP',
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
            title: 'Browser',
            dataIndex: 'Browser',
            key: 'Browser',
          },
          {
            title: 'OS',
            dataIndex: 'OS',
            key: 'OS',
          }, 
          {
            title: 'Date',
            dataIndex: 'Date',
            key: 'Date',
          },
          {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            filters: [{
              text: 'London',
              value: 'London',
            }, {
              text: 'New York',
              value: 'New York',
            }],
            onFilter: (value, record) => record.address.indexOf(value) === 0,
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
                <Table columns={columns} loading={false}  expandedRowRender={record => <p style={{ margin: 0 }}>{record.user_agent}</p>} dataSource={this.state.data} />
            </Content>
        </Fragment>
        )
    }
}
