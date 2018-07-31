import React, {Component, Fragment} from 'react'
import {Breadcrumb, Icon, Layout,Table, Input, Button} from 'antd'
const {Content, Header} = Layout


export default class Vistors extends Component {
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
            title: 'IP',
            dataIndex: 'ip',
            key: 'ip',
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
            dataIndex: 'browser',
            key: 'Browser',
          },
          {
            title: 'OS',
            dataIndex: 'os',
            key: 'OS',
          }, 
          {
            title: 'Date',
            dataIndex: 'createdAt',
            key: 'Date',
          },
          {
            title: 'Address',
            dataIndex: 'city',
            key: 'address',
            filters: [{
              text: 'Gaza',
              value: 'Gaza',
            }],
            onFilter: (value, record) => record.city.indexOf(value) === 0,
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
                    Vistors
                </Breadcrumb.Item>
            </Breadcrumb>
            </Header>
            <Content style={{ margin: '24px 16px 0' }}>
                <Table columns={columns} loading={this.props.loading}  expandedRowRender={record => <p style={{ margin: 0 }}>{record.userAgent}</p>} dataSource={this.props.data} />
            </Content>
        </Fragment>
        )
    }
}
