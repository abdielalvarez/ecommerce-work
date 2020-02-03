import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import history from '../routes/history';
import MiniCards from '../components/MiniCards';
import '../assets/styles/containers/CreateDirectionAlias.scss';

class CreateDirectionAlias extends Component {

  constructor() {
    super();
    this.state = {
      show: false,
      receiverName: '',
      receiverLastName: '',
      street: '',
      extNum: '',
      intNum: '',
      postalCode: '',
      colDel: '',
      cel: '',
      betweenStreets: '',
      references: '',
      alias: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  subtotal = () => {
    const local = localStorage.getItem('shoppingCart');
    const parsed = JSON.parse(local);
    const mapped = parsed.map((item) => {
      return item.total;
    });
    const reduced = mapped.reduce((acc, cur) => {
      const sum = acc + cur;
      return sum;
    });
    const int = reduced.toFixed(2);
    return int;
  };

  showList = () => {
    this.setState({
      show: true,
    });
  }

  hideList = () => {
    this.setState({
      show: false,
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    const { receiverName, receiverLastName, street, extNum, intNum, postalCode, colDel, cel, betweenStreets, references, alias } = this.state;
    delete this.state.show;
    if (!localStorage.getItem('addressAlias')) {
      const array = [];
      const document = {};
      document['receiverName'] = receiverName;
      document['receiverLastName'] = receiverLastName;
      document['street'] = street;
      document['extNum'] = extNum;
      document['intNum'] = intNum;
      document['postalCode'] = postalCode;
      document['colDel'] = colDel;
      document['cel'] = cel;
      document['betweenStreets'] = betweenStreets;
      document['references'] = references;
      document['alias'] = alias;
      array.push(document);
      const str = JSON.stringify(array);
      localStorage.setItem('addressAlias', str);
    } else {
      const local = localStorage.getItem('addressAlias');
      const parsed = JSON.parse(local);
      const document = {};
      document['receiverName'] = receiverName;
      document['receiverLastName'] = receiverLastName;
      document['street'] = street;
      document['extNum'] = extNum;
      document['intNum'] = intNum;
      document['postalCode'] = postalCode;
      document['colDel'] = colDel;
      document['cel'] = cel;
      document['betweenStreets'] = betweenStreets;
      document['references'] = references;
      document['alias'] = alias;
      parsed.push(document);
      const str = JSON.stringify(parsed);
      localStorage.setItem('addressAlias', str);
    }
    if (localStorage.getItem('alias')) {
      localStorage.removeItem('alias');
    }
    const array = [];
    const object = {};
    object['receiverName'] = receiverName;
    object['receiverLastName'] = receiverLastName;
    object['street'] = street;
    object['extNum'] = extNum;
    object['intNum'] = intNum;
    object['postalCode'] = postalCode;
    object['colDel'] = colDel;
    object['cel'] = cel;
    object['betweenStreets'] = betweenStreets;
    object['references'] = references;
    object['alias'] = alias;
    array.push(object);
    const str = JSON.stringify(array);
    localStorage.setItem('alias', str);
    history.push('/shippingAndPayment');
  }

  render() {
    const local = localStorage.getItem('shoppingCart');
    const parsed = JSON.parse(local);

    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-6'>
            <div className='container mt-3 mb-3'>
              <h4 className='mb-0'>INGRESE SU DIRECCIÓN</h4>
              <small className='text-danger'>Los campos * son obligatorios</small>
            </div>
            <div className='container'>
              <h4>Datos de quien recibe el pedido</h4>
              <form>
                <div className='form-group'>
                  <input
                    type='text'
                    name='receiverName'
                    className='form-control inputStyle'
                    placeholder='Nombre*'
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    name='receiverLastName'
                    className='form-control inputStyle'
                    placeholder='Apellido*'
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    name='street'
                    className='form-control inputStyle'
                    placeholder='Calle*'
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <input
                      type='text'
                      name='extNum'
                      className='form-control inputStyle'
                      placeholder='Número exterior*'
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className='form-group col-md-6'>
                    <input
                      type='text'
                      name='intNum'
                      className='form-control inputStyle'
                      placeholder='Número interior'
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    name='postalCode'
                    className='form-control inputStyle'
                    placeholder='Código Postal*'
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    name='colDel'
                    className='form-control inputStyle'
                    placeholder='Colonia y/o Delegación*'
                    onChange={this.handleChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    name='cel'
                    className='form-control inputStyle'
                    placeholder='Teléfono fijo o celular*'
                    onChange={this.handleChange}
                  />
                </div>
              </form>
              <h4 className='mb-0'>Datos adicionales</h4>
              <small>(esta información hará el proceso de entrega más sencillo para nosotros)</small>
              <form>
                <div className='form-group'>
                  <input
                    type='text'
                    name='betweenStreets'
                    className='form-control inputStyle'
                    placeholder='Entre calles'
                    onChange={this.handleChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    name='references'
                    className='form-control inputStyle'
                    placeholder='Referencias'
                    onChange={this.handleChange}
                  />
                </div>
              </form>
              <h4 className='mb-0'>Alias de tu nueva dirección</h4>
              <small>
                  Al darnos tu dirección la guardaremos con este alias para que no
                  tengas que volver a escribirla, a menos que desees enviarla a un destino no frecuente para ti.
              </small>
              <form>
                <div className='form-group'>
                  <input
                    type='text'
                    name='alias'
                    className='form-control inputStyle'
                    placeholder='Ejemplo: Casa de mi tía; Ejemplo2: Oficina de mi papá*'
                    onChange={this.handleChange}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className='col-6 mt-4'>
            <div className='container text-right'>
              {!this.state.show ? (
                <button type='submit' className='btn' onClick={this.showList}>
                  <h6>Consultar lista de compra</h6>
                </button>
              ) : (
                <button type='submit' className='btn' onClick={this.hideList}>
                  <h6>Ocultar lista de compra</h6>
                </button>
              )}
            </div>
            {!this.state.show ?
              <></> : (
                <div className='container mt-5'>
                  <ul className='list-group'>
                    {parsed.map((item) => {
                      const { images, name, total } = item;
                      return <MiniCards image={images} name={name} total={total} />;
                    })}
                  </ul>
                  <h6 className='text-right mt-2 mr-4'>
                  SUBTOTAL:
                  $
                    {this.subtotal()}
                  </h6>
                </div>
              )}
          </div>
        </div>
        <div className='row makeDistance'>
          <Link to='/shoppingCart' className='col-3 offset-1 ml-4 pink'>Regrese al carrito de compra</Link>
          <div className='buy col-3 offset-5 ml-10'>
            <button
              type='submit'
              className='forward rounded-pill hover'
              onClick={this.handleSubmit}
            >
                COMPRAR
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateDirectionAlias;
