import React, { Component } from 'react'

class ConnectedLayout extends Component {

    render () {

        const { pathname, member } = this.props

        return (
            <div className="main">
                    <title>{'Pantip - Learn, Share & Fun'}</title>
                    <link rel="canonical" href="https://react.pantip.com/" />
                    <link rel="icon" href="https://pantip.com/fav-icon.ico" type="image/x-icon" />
                    <meta property="og:title" content={'Pantip - Learn, Share & Fun'} />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://react.pantip.com/" />
                    <meta property="og:image" content="//ptcdn.info/pantip/pantip_logo_02.png" />
                    <meta property="og:site_name" content="Pantip" />
                    <meta property="og:description" content="ร่วมพูดคุยแลกเปลี่ยนความคิดเห็นในทุกประเด็น ทั้งบันเทิง หุ้น ความงาม ท่องเที่ยว รถยนต์ กีฬา โทรศัพท์มือถือ อาหาร การเมือง ครอบครัว บ้าน วิทยาศาสตร์ สุขภาพ ธุรกิจ" />
                    <meta name="google-site-verification" content="UaiArydZb5Bi28s5YgunZNSoObqXV97zA_OYbSuXAE8" />
                    <meta property="fb:app_id" content="117368861736328" />
                    <meta property="article:author" content="https://www.facebook.com/pantipdotcom" />
                    <meta property="article:publisher" content="https://www.facebook.com/pantipdotcom" />

            </div>
        )
    }
}

export default ConnectedLayout