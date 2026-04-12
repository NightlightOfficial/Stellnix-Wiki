import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'SkyBlock',
        icon: 'nature_people',
        link: '/docs/minigames/skyblock/getting-started',
        description: (
            <>
                Survive alone or with friends on a floating island! Stellnix-style!
            </>
        ),
    },
    {
        title: 'Feesh',
        icon: 'phishing',
        link: '/docs/minigames/feesh/getting-started',
        description: (
            <>
                Catch various fish you've never seen before, advance to better islands and chat with others!
            </>
        ),
    },
    {
        title: 'NineLives',
        icon: 'pets',
        link: '/docs/minigames/ninelives/getting-started',
        description: (
            <>
                Murder Mystery-like minigame with cats and custom roles! Will you be the killer or the savior?
            </>
        ),
    },
    {
        title: 'Sprouted Survival',
        icon: 'landscape',
        link: '/docs/minigames/sprouted/getting-started',
        description: (
            <>
                Vanilla survival experience with a few tweaks! Custom residences, homes and items!
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

export default function HomeMinigames() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="text--start margin-bottom--xl">
                    <Heading as="h2" className={styles.sectionTitle}>
                        Minigames
                    </Heading>
                    <p className={styles.sectionSubtitle}>
                        Whether you like action or prefer to relax, we got you covered!
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