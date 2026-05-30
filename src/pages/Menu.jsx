const menu = {
  Espresso: [
    { name: 'Espresso', desc: 'Bold, classic shot', price: '$3.00' },
    { name: 'Americano', desc: 'Espresso with hot water', price: '$3.50' },
    { name: 'Cappuccino', desc: 'Espresso, steamed milk, foam', price: '$4.50' },
    { name: 'Latte', desc: 'Espresso with steamed milk', price: '$4.75' },
  ],
  'Cold Drinks': [
    { name: 'Iced Coffee', desc: 'Cold brew over ice', price: '$4.00' },
    { name: 'Iced Latte', desc: 'Espresso, cold milk, ice', price: '$4.75' },
    { name: 'Frappé', desc: 'Blended ice coffee', price: '$5.50' },
  ],
  Pastries: [
    { name: 'Croissant', desc: 'Buttery and flaky', price: '$3.25' },
    { name: 'Blueberry Muffin', desc: 'Made fresh each morning', price: '$3.50' },
    { name: 'Chocolate Brownie', desc: 'Rich and fudgy', price: '$3.75' },
  ],
}

export default function Menu() {
  return (
    <div className="page">
      <h1>Our Menu</h1>
      {Object.entries(menu).map(([section, items]) => (
        <div key={section} className="menu-section">
          <h2>{section}</h2>
          <div className="menu-items">
            {items.map((item) => (
              <div key={item.name} className="menu-item">
                <div>
                  <div className="name">{item.name}</div>
                  <div className="desc">{item.desc}</div>
                </div>
                <div className="price">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
