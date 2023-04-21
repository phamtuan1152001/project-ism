import React from "react";

const FilterZone = () => {
    return (<div className="filter">
    <h3>Filter</h3>
    <div className="filter-box">
        <div className="gender">
            <h4>Gender</h4>
            <div className="gender-box">
                <div className="male">
                    <input type="checkbox" id="male" name="male" value="Male" />
                    <label for="male"> Male</label>
                </div>
                <div className="female">
                    <input type="checkbox" id="female" name="female" value="Female" />
                    <label for="female"> Female</label>
                </div>
            </div>
        </div>
        <div className="color">
            <h4>Color</h4>
            <div className="color-box">
                <div className="red">
                    <input type="checkbox" id="red" name="red" value="Red" />
                    <div className="redcircle"></div>
                    <label for="red"> Red</label>
                </div>
                <div className="apricot">
                    <input type="checkbox" id="apricot" name="apricot" value="Apricot" />
                    <div className="apricotcircle"></div>
                    <label for="apricot"> Apricot</label>
                </div>
                <div className="black">
                    <input type="checkbox" id="black" name="black" value="Black" />
                    <div className="blackcircle"></div>
                    <label for="black"> Black</label>
                </div>
                <div className="blackwhite">
                    <input type="checkbox" id="blackwhite" name="blackwhite" value="BlackWhite" />
                    <div className="halfcircle"></div>
                    <label for="blackwhite"> Black & White</label>
                </div>
                <div className="silver">
                    <input type="checkbox" id="silver" name="silver" value="Silver" />
                    <div className="silvercircle"></div>
                    <label for="silver"> Silver</label>
                </div>
                <div className="tan">
                    <input type="checkbox" id="tan" name="tan" value="Tan" />
                    <div className="tancircle"></div>
                    <label for="tan"> Tan</label>
                </div>
            </div>
        </div>
        <div className="price">
            <h4>Price</h4>
            <datalist id="allowed-prices">
                <option value="500.000 VND" />
                <option value="1.000.000 VND" />
                <option value="5.000.000 VND" />
                <option value="10.000.000 VND" />
                <option value="20.000.000 VND" />
                <option value="50.000.000 VND" />
            </datalist>

            <div className="minmax">
                <div className="min">
                    <input type="text" placeholder="Min" list="allowed-prices" />
                </div>
                <div className="max">
                    <input type="text" placeholder="Max" list="allowed-prices" />
                </div>
            </div>
        </div>
        <div className="breed">
            <h4>Breed</h4>
            <div className="breed-box">
                <div className="small">
                    <input type="checkbox" id="small" name="small" value="S" />
                    <label for="small"> Small</label>
                </div>
                <div className="medium">
                    <input type="checkbox" id="medium" name="medium" value="M" />
                    <label for="medium"> Medium</label>
                </div>
                <div className="large">
                    <input type="checkbox" id="large" name="large" value="L" />
                    <label for="large"> Large</label>
                </div>
            </div>
        </div>
    </div>
</div>);
};

export default FilterZone;