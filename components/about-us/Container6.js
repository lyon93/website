import styles from './Container6.module.css'
import descriptions from '../../assets/about-us-descriptions.json'
import PartnerCard from '../cards/PartnerCard'

const Container6 = ({ id }) => {

    const description = descriptions.filter( desc => desc.id === id)
    const { 
        title,
        company, bio1, bio2,
        company2, bio3, bio4,
        company3, bio5, bio6,
        company4, bio7, bio8,
    
    } = description[0]

    return ( 
        <div className={styles.main}>
            <h1 className={`${styles.title} lg:text-5xl lg:pt-20 lg:pb-8`}>
                {title}
            </h1>

            <div className={`flex flex-col justify-center items-center lg:mb-24`}>
                <PartnerCard 
                    company={company} bio={bio1} bio2={bio2} blue={true} 
                    logo="Blackberry logo" logoW={157} logoH={27} 
                    image="Blackberry img" imageW={473} imageH={487} 
                    />

                <PartnerCard company={company2} bio={bio3} bio2={bio4} blue={false} 
                    logo="Y Combinator logo" logoW={155} logoH={32} 
                    image="Y Combinator img" imageW={473} imageH={486} 
                />
                
                <PartnerCard company={company3} bio={bio5} bio2={bio6} blue={true} 
                    logo="Lanzadera logo" logoW={162} logoH={22} 
                    image="Lanzadera img" imageW={473} imageH={487} 
                />

                <PartnerCard company={company4} bio={bio7} bio2={bio8} blue={false} 
                    logo="500 logo" logoW={175} logoH={47} 
                    image="500 img" imageW={471} imageH={486} 
                />
            </div>
           
        </div>
     );
}
 
export default Container6;