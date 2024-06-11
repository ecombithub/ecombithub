import ph from '../images/phone.gif'
function Trun() {
    return (
        <>
            <div className='mobile--app--section'>
                <div className='wrapper'>
                    <div className='container'>
                        <div className='mobile--app--left'>
                            <div className='mobile--app--left_side'>
                                <img src={ph} />
                            </div>
                            <div className='mobile--app--right'>
                                <div className='mobile--app--store'>
                                    <h2>Turn Your Shopify Store into mobile app!</h2>
                                    <p>Use HubSyntax to grow your Shopify plus brand via checkout upsells, one-click upsells and thank you page customization. Enjoy  complimentary migration and  account manager.</p>
                                    <button id='mobile--btn'>Start 30 days trial</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Trun;