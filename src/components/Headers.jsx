import { Layout } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
const { Header } = Layout;
import 'bootstrap/dist/css/bootstrap.css';
import Loading from './loading';
import { Link } from 'react-router-dom';
import { SearchBar } from './SearchBar';


const Headers = () => {
  //const [loading, setLoading] = useState(true)
  const [categori, setCategori] = useState([])

  // const [isHovering, setIsHovering] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovering(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovering(false);
  // };

  useEffect(() => {
    axios.get('https://react-mini-projects-api.classbon.com/FoodCategory/categories')
      .then((response) => setCategori(response?.data));
    // setLoading(false);
  }, []);

  const renderContent = () => {
    if (!categori.length) return <Loading />
    return (
      <div className='d-flex flex-row-reverse'>
        <ul className='nav'>
          {categori?.map(Category =>
            <li className='nav-item'
              key={Category.id}>
              <Link className='nav-link fs-5 fw-bold text-warning' to={'/' + Category.name} >{Category.name}</Link>
            </li>
          )
          }
          <li className='nav-item'>
            <Link className='nav-link fs-5 fw-bold text-warning' to={'/همه فست فود ها'} > همه فست فود ها</Link>
          </li>
        </ul>
        <SearchBar />
      </div>
    )
  }

  return (
    <Layout className="layout">

      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >

        <div
          className='py-4 d-flex'
          mode="vertical"
        >
          <div>
            {renderContent()}
          </div>

        </div>

      </Header>
    </Layout>
  );
};
export default Headers;