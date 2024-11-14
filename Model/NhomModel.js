import sequelize from "../DATABASE/dbSequelize";
import { DataTypes } from "sequelize";

const Nhom = sequelize.define("Nhom", {
    idnhom: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    ten: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'nhom',
    timestamps: false,
});
export default Nhom;
