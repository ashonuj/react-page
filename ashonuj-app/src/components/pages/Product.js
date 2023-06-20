import React from 'react';
import '../../App.css';
import Footer from '../Footer';

export default function Products() {

    const products = [
        { CodeNumber: 'CodeNumber', ItemDescription: 'ItemDescription', Grade: 'Grade', PackSize : 'PackSize' },
        { CodeNumber: 10003, ItemDescription: 'Acetic Acid Glacial', Grade: 'LR', PackSize : '500ml' },
        { CodeNumber: 10008, ItemDescription: 'Acetic Acid Glacial', Grade: 'LR' , PackSize : '2.5L' },
        { CodeNumber: 20003, ItemDescription: 'Acetic Acid Glacial', Grade: 'AR', PackSize : '500ml' },
        { CodeNumber: 20008, ItemDescription: 'Acetic Acid Glacial', Grade: 'AR' , PackSize : '2.5L'},
        { CodeNumber: 30178, ItemDescription: 'Acetic Acid Glacial', Grade: 'HPLC', PackSize : '500ml' },
        { CodeNumber: 10113, ItemDescription: 'Acetonitrile', Grade: 'LR' , PackSize : '500ml' },
        { CodeNumber: 10118, ItemDescription: 'Acetonitrile', Grade: 'LR', PackSize : '2.5L'},
        { CodeNumber: 20103, ItemDescription: 'Acetonitrile', Grade: 'AR' , PackSize : '500ml' },
        { CodeNumber: 20108, ItemDescription: 'Acetonitrile', Grade: 'AR', PackSize : '2.5L' },
        { CodeNumber: 30008, ItemDescription: 'Acetonitrile', Grade: 'HPLC', PackSize : '2.5L'  },
        { CodeNumber: 'G0008', ItemDescription: 'Acetonitrile', Grade: 'GRAD', PackSize : '500ml'  },
        { CodeNumber: 10033, ItemDescription: 'Acetone', Grade: 'LR',PackSize : '2.5L'  },
        { CodeNumber: 10038, ItemDescription: 'Acetone', Grade: 'LR', PackSize : '500ml' },
        { CodeNumber: 20033, ItemDescription: 'Acetone', Grade: 'AR', PackSize : '500ml'  },
        { CodeNumber: 20038, ItemDescription: 'Acetone', Grade: 'AR',PackSize : '2.5L' },
      ];

    return(
        <>
        <div className='products-container'>
        <h1 className='products'>PRODUCTS</h1>
        <p className='products-desc'>Ashonuj Chem Pvt. Ltd. is specialized in supplying high purity solvents required in bulk quantities for production of API and Formulations on a commercial basis. We can provide you with CoA and MSDS for the same. We can also manufacture high purity solvents as per your specifications.</p>
        {/* <h1 className='products'>PRODUCTS</h1>; */}
        
        <table className='product-table'>
        <thead>
        <a href='http://apchem.in/pdf/Lactic%20Acid%20MSDS.pdf'>Click here to download a copy of the MSDS in .PDF  format.</a>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.CodeNumber}>
              <td className='table-cell'>{product.CodeNumber}</td>
              <td className='table-cell'>{product.ItemDescription}</td>
              <td className='table-cell'>{product.Grade}</td>
              <td className='table-cell'>{product.PackSize}</td>
            </tr>
          ))}
        </tbody>
      </table>
        <Footer />
        </div>
        </>
       
    );
}