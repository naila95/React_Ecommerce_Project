import React from "react";
import { Link } from "react-router-dom";
import { Select, Checkbox } from "antd";

export default function Shop() {
  const onChangeBrand = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const onChangeStock = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  // Filter `option.label` match the user type `input`
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
  return (
    <main>
      <div className="px-14 py-16">
        <div className="flex justify-between items-center">
          <div className="">
            <Link to={"/"}>Home / </Link>
            <Link> Search</Link>
          </div>
          <div className="">
            <h3 className="text-3xl font-bold mb-7">Shop By Category </h3>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="">
              <p>200 items</p>
            </div>
            <div className="">
              <Select
                showSearch
                placeholder="Sorting Options"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={filterOption}
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },
                  {
                    value: "tom",
                    label: "Tom",
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col w-[20%]">
            <div className="py-1 border-b-2">
              <h3 className="text-2xl font-semibold mb-7">Filters</h3>
            </div>
            <div className="py-3">
              <h3 className="text-lg font-semibold mb-7">Brand</h3>
              <div className="">
                <Checkbox className="text-lg mb-2" onChange={onChangeBrand}>
                  Brand 1
                </Checkbox>
              </div>
              <div>
                <Checkbox className="text-lg" onChange={onChangeBrand}>
                  Brand 2
                </Checkbox>
              </div>
            </div>
            <div className="py-3">
              <h3 className="text-lg font-semibold mb-7">Stock</h3>
              <div className="">
                <Checkbox className="text-lg mb-2" onChange={onChangeStock}>
                  In Stock
                </Checkbox>
              </div>
              <div className="">
                <Checkbox className="text-lg" onChange={onChangeStock}>
                  Not In Stock
                </Checkbox>
              </div>
            </div>
          </div>
          <div className="">Products</div>
        </div>
      </div>
    </main>
  );
}
