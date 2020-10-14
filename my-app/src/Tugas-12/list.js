import React, { Component } from "react";
import "./tugas12.css";
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keranjang: [
        { nama: "Semangka", harga: 10000, berat: 1000 },
        { nama: "Anggur", harga: 40000, berat: 500 },
        { nama: "Strawberry", harga: 30000, berat: 400 },
        { nama: "Jeruk", harga: 30000, berat: 1000 },
        { nama: "Mangga", harga: 30000, berat: 500 },
      ],
      inputNama: "",
      inputHarga: "",
      inputBerat: "",
      index: -1,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNama = this.handleNama.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let namaBuah = this.state.inputNama;
    let hargaBuah = this.state.inputHarga;
    let beratBuah = this.state.inputBerat;
    let keranjangBuah = this.state.keranjang;
    let index = this.state.index;
    keranjangBuah.push({
      nama: namaBuah,
      harga: hargaBuah,
      berat: beratBuah,
    });
    if (index === -1) {
      this.setState({
        keranjangBuah,
      });
    } else {
      keranjangBuah[index] = {
        inputNama: "",
        inputHarga: "",
        inputBerat: "",
      };
      this.setState({ keranjangBuah });
    }
  };

  // Proses Nama Buah
  handleNama = (e) => {
    let nama = e.target.value;
    this.setState({
      inputNama: nama,
    });
  };
  // Proses Harga Buah
  handleHarga = (e) => {
    let harga = e.target.value;
    this.setState({
      inputHarga: harga,
    });
  };
  // Proses Berat Buah
  handleBerat = (e) => {
    let berat = e.target.value;
    this.setState({
      inputBerat: berat,
    });
  };
  // Proses Edit
  handleEdit = (e) => {
    let index = e.target.value;
    this.setState({
      inputNama: this.state.keranjang[index].nama,
      inputHarga: this.state.keranjang[index].harga,
      inputBerat: this.state.keranjang[index].berat,
    });
  };
  // Proses Delete
  handleDelete = (e) => {
    let index = e.target.value;
    this.state.keranjang.splice(index, 1);
    this.setState({
      keranjang: this.state.keranjang,
    });
    console.log(this.state.keranjang.splice(index, 1));
  };
  render() {
    return (
      <>
        <h1>Daftar Buah-Buahan</h1>
        <table>
          <tr>
            <th>No</th>
            <th>Buah</th>
            <th>Harga</th>
            <th>Berat</th>
            <th>Aksi</th>
          </tr>
          {this.state.keranjang.map((k, index) => {
            return (
              <tr>
                <th>{index + 1}</th>
                <td>{k.nama}</td>
                <td>{k.harga}</td>
                <td>{k.berat / 1000 + " " + "kg"}</td>
                <td>
                  <button
                    className="button button2"
                    onClick={this.handleEdit}
                    value={index}
                  >
                    Edit
                  </button>
                  <button
                    className="button button3"
                    onClick={this.handleDelete}
                    value={index}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </table>

        <div style={{ marginTop: "50px" }}>
          <form onSubmit={this.handleSubmit}>
            <label>Nama Buah :</label>
            <br />
            <input
              type="text"
              value={this.state.inputNama}
              onChange={this.handleNama}
              required
              autoComplete="off"
            />
            <br />
            <label>Harga Buah :</label>
            <br />
            <input
              type="text"
              value={this.state.inputHarga}
              onChange={this.handleHarga}
              required
              autoComplete="off"
            />
            <br />
            <label>Berat Buah :</label>
            <br />
            <input
              type="text"
              value={this.state.inputBerat}
              onChange={this.handleBerat}
              required
              autoComplete="off"
            />
            <br />
            <button className="button button1" type="submit">
              INPUT
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default List;