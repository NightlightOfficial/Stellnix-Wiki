import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Text Formatting',
        icon: 'text_fields',
        link: '/docs/basics/text-formatting',
        description: (
            <>
                How to format texts on post using Stellnix's custom text formatting.
            </>
        ),
    },
    {
        title: 'Creator Hub',
        icon: 'construction',
        link: '/docs/basics/creator-hub',
        description: (
            <>
                Release your own items, keep track of your released items and more!
            </>
        ),
    },
    {
        title: 'Verification',
        icon: 'check_circle',
        link: '/docs/basics/verification',
        description: (
            <>
                What does it mean to be verified and how to get verified?
            </>
        ),
    },
    {
        title: 'Leaderboards',
        icon: 'star',
        link: '/docs/basics/leaderboards',
        description: (
            <>
                Feeling competitive? Learn more about the Stellnix Leaderboard
            </>
        ),
    },
    {
        title: 'Guides',
        icon: 'book',
        link: '/docs/guides/',
        description: (
            <>
                Learn how to make items for the Stellnix Marketplace
            </>
        ),
    },
];

function Feature({title, description, icon, link}) {
    return (
        <div className={clsx('col col--4 margin-bottom--lg')}>
            <a href={link} className={clsx('card', styles.featureCard)}>
                <div className="card__header">
                    <Heading as="h3" className={styles.featureTitle}>
            <span className={clsx('material-icons', styles.iconInline)}>
              {icon}
            </span>
                        {title}
                    </Heading>
                </div>
                <div className="card__body">
                    <p>{description}</p>
                </div>
            </a>
        </div>
    );
}

export default function HomeAdvanced() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="text--start margin-bottom--xl">
                    <Heading as="h2" className={styles.sectionTitle}>
                        Advanced features
                    </Heading>
                    <p className={styles.sectionSubtitle}>
                        Already explored and figured out the basics? Learn these features to further expand what you can do on Stellnix!
                    </p>
                </div>
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}