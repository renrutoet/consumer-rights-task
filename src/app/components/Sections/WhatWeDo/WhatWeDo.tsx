import { SplitBackground } from '../../SplitBackground/SplitBackground'
import textStyles from '../../../styles/text.module.scss'
import pageStyles from '../../../styles/Page.module.scss'
import whatWeDoStyles from './WhatWeDo.module.scss'
import { Column } from '../../Column/Column'
import { Row } from '../../Row/Row'

export const WhatWeDo = (): JSX.Element => {
    return (
        <section
            className={`${pageStyles.section} ${whatWeDoStyles['what-we-do']}`}
        >
            <SplitBackground text="Automation" />
            <Column classes={['flex-column--width-60']}>
                <div>
                    <div>TEST</div>
                    <div>TEST</div>
                    <div>TEST</div>
                </div>
                <Row>
                    <div>TEST</div>
                    <div>TEST</div>
                    <div>TEST</div>
                    <div>TEST</div>
                </Row>
                <div className={`${whatWeDoStyles.bottom}`}>
                    <h4
                        className={`${textStyles['font-primary']} ${whatWeDoStyles['bottom__heading']}`}
                    >
                        Vestibulum{' '}
                        <em>
                            <u>interdum</u>
                        </em>{' '}
                        leo a dolor porta,{' '}
                        <span className={`${textStyles['font-secondary']}`}>
                            <em>sed maximus</em>
                        </span>{' '}
                        quam venenatis?
                    </h4>
                    <div className={`${textStyles['font-primary']}`}>
                        Etiam elementum efficitur auctor. Duis tempor nisi ut
                        risus pellentesque posuere. Fusce vehicula massa at
                        sodales porta. Proin sodales, mauris ac blandit
                        sagittis, nunc ligula auctor dolor, quis euismod ligula
                        erat eget erat. Aliquam faucibus libero vitae turpis
                        molestie, feugiat commodo.
                    </div>
                    <button className={`${pageStyles.button}`}>
                        LEARN MORE
                    </button>
                </div>
            </Column>
        </section>
    )
}
