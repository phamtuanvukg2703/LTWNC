import sequelize from "../DATABASE/dbSequelize";
import { DataTypes, ForeignKeyConstraintError } from "sequelize";

const sanpham = sequelize.define("sanpham", {
    masp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    ten: {
        type: DataTypes.STRING,
    },
    gia: {
        type: DataTypes.DECIMAL
    },
    hinhanh: {
        type: DataTypes.STRING,
    },
    mota: {
        type: DataTypes.STRING
    },
    idnhom: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'sanpham',
    timestamps: false
})
export default sanpham