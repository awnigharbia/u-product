import React, {Component, Fragment} from 'react'
import {Breadcrumb, Icon, Layout,Table, Input, Button} from 'antd'
const {Content, Header} = Layout

const data = [
{
  key: '1',
  name: 'John Bron',
  Email:'awni2009@hotmail.com',
  Univ: 'Al-Azhar Univ',
  City: 'Gaza',
  Lang:'Javascript',
  address: 'New York No. 1 Lake Park',
  Bio:'New York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake Park'
},
{
    key: '2',
    name: 'Awni Brown',
    Email:'awni2009@hotmail.com',
    Univ: 'Al-Azhar Univ',
    City: 'Gaza',
    Lang:'Javascript',
    address: 'New York No. 1 Lake Park',
    Bio:'New York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake Park'
},
{
    key: '3',
    name: 'John Brown',
    Email:'awni2009@hotmail.com',
    Univ: 'Al-Azhar Univ',
    City: 'Gaza',
    Lang:'Javascript',
    address: 'New York No. 1 Lake Park',
    Bio:'New York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake Park'
},
{
    key: '4',
    name: 'John Brown',
    Email:'awni2009@hotmail.com',
    Univ: 'Al-Azhar Univ',
    City: 'Gaza',
    Lang:'Javascript',
    address: 'New York No. 1 Lake Park',
    Bio:'New York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake Park'
},
{
    key: '5',
    name: 'John Brown',
    Email:'awni2009@hotmail.com',
    Univ: 'Al-Azhar Univ',
    City: 'Gaza',
    Lang:'Javascript',
    address: 'New York No. 1 Lake Park',
    Bio:'New York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake Park'
},
{
    key: '6',
    name: 'John Brown',
    Email:'awni2009@hotmail.com',
    Univ: 'Al-Azhar Univ',
    City: 'Gaza',
    Lang:'Javascript',
    address: 'New York No. 1 Lake Park',
    Bio:'New York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake Park'
},
];


export default class Orders extends Component {
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
            dataIndex: 'Email',
            key: 'Email',
          },
          {
            title: 'Lang',
            dataIndex: 'Lang',
            key: 'Lang',
          }, 
          {
            title: 'Univ',
            dataIndex: 'Univ',
            key: 'Univ',
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
                <Table columns={columns} loading={false}  expandedRowRender={record => <p style={{ margin: 0 }}>{record.Bio}</p>} dataSource={this.state.data} />
            </Content>
        </Fragment>
        )
    }
}
