const Home = () => {
    return (
        <div style={{ textAlign: 'center', padding: '40px', backgroundColor: 'inherit', height: '100%' }}>
            <h1 style={{ fontSize: '3rem', color: '#4A90E2', marginBottom: '20px' }}>
                Welcome to FakeShop
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.8', maxWidth: '700px', margin: '0 auto' }}>
                Your one-stop destination for the best fake deals on the internet!
                Browse through our wide variety of products and discover amazing offers
                tailored just for you. Whether you&apos;re looking for electronics, fashion,
                home goods, or more, FakeShop has got you covered.
            </p>
            <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.8', maxWidth: '700px', margin: '20px auto' }}>
                Start shopping now and enjoy an exceptional experience with unbeatable prices and quality.
                Click on <strong style={{ color: '#4A90E2' }}>Shop</strong> to explore our collection!
            </p>
            <div
                style={{
                    marginTop: '40px',
                    backgroundColor: '#fff',
                    padding: '20px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    display: 'inline-block',
                }}
            >
                <p style={{ fontSize: '1rem', color: '#999', margin: 0 }}>
                    <strong style={{ color: 'red' }}>Disclaimer:</strong> This is a demo application created for learning and testing purposes.
                    All products, prices, and offers displayed are purely fictional and are not intended for actual transactions.
                </p>
            </div>
        </div>
    );
};

export default Home;
