import "../AdminCategoryNew/AdminCategoryNew.scss";

function AdminCategoryEdit() {
  return (
    <div className="wrapper">
      <form className="form-wrapper">
        <div className="form-title-header">
          <h5 className="mb-4">Edit Category</h5>
          <hr />
          <p className="dark-blue-text mt-4" />
        </div>

        <div className="form-group">
          <label className="form-group-label" htmlFor="category-select-add">
            Category Name:
          </label>
          <select className="form-control form-select" id="category-select-add">
            <option>Boxes Of Love</option>
            <option>Socks For Summer</option>
            <option>Socks For Women</option>
            <option>Socks For Men</option>
            <option>Socks For Kids</option>
            {/* <option>Tiểu thuyết</option>
            <option>Chuyên ngành</option>
            <option>Ngoại ngữ</option>
            <option>Thường thức đời sống</option>
            <option>Khác</option> */}
          </select>
        </div>

        <div className="form-group">
          <label
            className="form-group-label"
            htmlFor="exampleFormControlTextarea1"
          >
            Describe About Category:
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            placeholder="Something funny there...."
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Lưu
        </button>
      </form>
    </div>
  );
}

export default AdminCategoryEdit;
