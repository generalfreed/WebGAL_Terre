import * as React from 'react';
import { Callout, Link, Text } from '@fluentui/react';
import { useBoolean, useId } from '@fluentui/react-hooks';
import { CommandBarButton } from '@fluentui/react/lib/Button';
import styles from './about.module.scss';
import { __INFO } from "@/config/info";
import { useRelease } from "../../hooks/useRelease";
import { logger } from '@/utils/logger';
import useTrans from '@/hooks/useTrans';

interface DateTimeFormatOptions {
  year: 'numeric' | '2-digit';
  month: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
  day: 'numeric' | '2-digit';
}

const About: React.FunctionComponent = () => {
  const [isCalloutVisible, { toggle: toggleIsCalloutVisible }] = useBoolean(false);
  const buttonId = useId('callout-button');
  const labelId = useId('callout-label');
  const descriptionId = useId('callout-description');

  const t = useTrans('editor.topBar.');

  const latestRelease = useRelease();

  /**
   * 比较版本号
   * @param latestVersion 最新版本
   * @param currentVersion 当前版本
   * @returns 1: 最新版本比当前版本高, -1: 最新版本比当前版本低，0: 版本相同
   */
  const compareVersion = (latestVersion: string, currentVersion: string) => {
    const versionToArray = (version: string) => version?.split('.')?.map(v => Number(v))??[0];

    const latestVersionArray = versionToArray(latestVersion);
    const currentVersionArray = versionToArray(currentVersion);
    const length = Math.max(latestVersionArray.length, currentVersionArray.length);

    for (let i = 0; i < length; i++) {
      if (!latestVersionArray[i]){
        latestVersionArray[i] = 0;
      }
      if (!currentVersionArray[i]){
        currentVersionArray[i] = 0;
      }
      if (latestVersionArray[i] > currentVersionArray[i]) {
        return 1;
      } else if (latestVersionArray[i] < currentVersionArray[i]) {
        return -1;
      }
    }
    return 0;
  };

  const isNewRelease = latestRelease && compareVersion(latestRelease.version, __INFO.version) === 1;

  isNewRelease && logger.info(`发现新版本：${latestRelease.version}`, latestRelease);

  const dateTimeOptions: DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };

  return (
    <>
      <CommandBarButton
        className={styles.button}
        id={buttonId}
        onClick={toggleIsCalloutVisible}
        text={`${t('about.about')} ${isNewRelease ? `(${t('about.checkedForNewVersion')})` : ''}`}
        iconProps={{ iconName: 'Info' }}
      />
      {isCalloutVisible &&
        <Callout
          className={styles.callout}
          ariaLabelledBy={labelId}
          ariaDescribedBy={descriptionId}
          role="dialog"
          gapSpace={0}
          target={`#${buttonId}`}
          onDismiss={toggleIsCalloutVisible}
          setInitialFocus
        >
          <Text as="h1" block variant="xLarge" className={styles.title} id={labelId}>
            WebGAL Terre
          </Text>
          <Text block variant="medium" className={styles.info} id={descriptionId}>
            <p>{t('about.slogan')}</p>
            <small>
              {t('about.currentVersion')}: {`${__INFO.version} (${new Date(__INFO.buildTime).toLocaleString('zh-CN', dateTimeOptions).replaceAll('/', '-')})`}<br />
              {
                latestRelease &&
                <span>
                  {t('about.latestVersion')}: {`${latestRelease.version} (${new Date(latestRelease.releaseTime).toLocaleString('zh-CN', dateTimeOptions).replaceAll('/', '-')})`}
                </span>
              }
              <p>
                {
                  isNewRelease &&
                  <Link href="https://openwebgal.com/download/" target="_blank" className={styles.link}>
                    {t('about.downloadLatest')}
                  </Link>
                }
              </p>
              <hr />
              <div >
                Powered by <Link href="https://github.com/MakinoharaShoko/WebGAL" target="_blank" >WebGAL</Link> Framework
              </div>
              <div>
                Made with ❤ by <Link href="https://github.com/MakinoharaShoko" target="_blank" >Mahiru</Link>
              </div>
            </small>
          </Text>
          <div className={styles.link_group}>
            <Link href="https://openwebgal.com/" target="_blank" className={styles.link}>
              {t('about.homePage')}
            </Link>
            <Link href="https://docs.openwebgal.com/" target="_blank" className={styles.link}>
              {t('about.document')}
            </Link>
            <Link href="https://github.com/MakinoharaShoko/WebGAL_Terre" target="_blank" className={styles.link}>
              GitHub
            </Link>
          </div>
        </Callout>
      }
    </>
  );
};

export default About;
