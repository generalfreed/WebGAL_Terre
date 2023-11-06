export const jp = {
  common: {
    delete: '削除',
    exit: '戻る',
    create: '作成',
    revise: '変更',
    cancel: 'キャンセル',
    rename: 'Rename',
    renameDir: 'Rename dir',
  },

  dashBoard: {
    createNewGame: {
      button: '新しいゲーム',
      dialog: {
        title: '新しいゲームを作成する',
        text: '新しいゲーム名',
        defaultName: '新しいゲーム',
      }
    },
    preview: {
      noneChecked: 'ゲームが選択されていません',
      editGame: 'ゲームの編集'
    },
    titles: {
      gameList: 'ゲームリスト',
    },
    msgs: {
      created: 'を作成した'
    },
    dialogs: {
      deleteGame: {
        title: "ゲームの削除",
        subtext: `"{{gameName}}"を削除してもよろしいですか？`
      },
    }
  },

  editor: {
    topBar: {
      editing: '編集:',
      editMode: {
        title: '編集モードの切り替え',
        onText: 'オンで、スクリプト編集モードを使用',
        offText: 'オフで、グラフィックエディタを使用'
      },
      commandBar: {
        items: {
          source: 'ソースコード',
          language: {
            text: '言語選択'
          },
          help: {
            text: '制作ガイド'
          },
          release: {
            text: "ゲームを出力",
            items: {
              web: "ウェブとしてエクスポート",
              exe: "実行可能ファイルとしてエクスポート",
              android: "Andoroidアプリとしてエクスポート"
            }
          }
        }
      },
      about: {
        about: 'About',
        checkedForNewVersion: 'Checked for new version',
        slogan: 'Galgame Editing. Redefined',
        currentVersion: 'Current Version',
        latestVersion: 'Latest Version',
        homePage: 'Project HomePage',
        document: 'Document',
        downloadLatest: 'Download Latest Version',
      },
    },

    sideBar: {
      preview: {
        title: 'ゲームプレビュー',
        refresh: '再読み込み',
        previewInNewTab: '新しいタブでプレビュー',
        livePreview: 'ライブ・プレビュー',
        notice: 'ライブプレビューはゲームを制限付きで早送りし、以前のシーンの効果はマッピングされません。'
      },

      file: {
        dialogs: {
          editName: {
            title: 'ファイル名の編集',
            text: '新しいファイル名',
          },
          delete: {
            text: '"{{name}}"を削除してもよろしいですか？'
          }
        }
      },

      assets: {
        title: 'アセット一覧',
        supportFileTypes: 'このフォルダーでサポートされているファイルの種類',
        buttons: {
          createNewFolder: '新しいフォルダ',
          openFolder: 'ゲームのアセットフォルダーを開く',
          rename: '名前を変更',
          deleteSure: '削除',
          upload: 'アップロード',
          uploadAsset: 'アセットをアップロードする'
        },
        folders: {
          animation: 'Animation',
          background: 'Background',
          bgm: 'BGM',
          figure: 'Figure',
          scene: 'Scene',
          tex: 'Tex',
          video: 'Video',
          vocal: 'Vocal'
        }
      },

      gameConfigs: {
        title: 'ゲーム構成',
        options: {
          name: 'ゲーム名',
          id: 'ゲームID',
          description: 'ゲーム概要',
          packageName: 'パッケージ名',
          textboxTheme:'テキストボックスの種類',
          bg: 'タイトルの背景画像',
          bgm: 'タイトルのBGM',
          logoImage: 'ロゴ',
        }
      },

      scenes: {
        title: 'シーン一覧',
        dialogs: {
          create: {
            button: '新しいシーン',
            title: '新しいシーンを作成する',
            text: '新しいシーン名',
          }
        }
      }
    },

    mainArea: {
      noFileOpened: '現在開いているファイルはありません',
      canNotPreview: 'このファイルはプレビューできません'
    },

    graphical: {
      buttons: {
        delete: 'この文を削除',
        addForward: 'この文の前に追加',
        add: '追加'
      },

      sentences: {
        say: {
          title: 'ダイアログ',
          initText: "キャラクター名を空白のままにすると前の文から継承;",
          descText: 'セリフと同時にボイスの設定が可能です',
          options: {
            speaker: {
              placeholder: {
                voiceover: "キャラクター名は設定不可",
                role: "キャラクター名を指定"
              }
            },
            tips: {
              edit: "ヒント:改行は三行まで可能",
            },
            dialogue: {
              placeholder: "ダイアログ"
            },
            add: {
              button: '新しい行を追加'
            },
            voiceover: {
              title: "モードの切り替え",
              on: "ナレーションモード",
              off: "キャラクターモード"
            },
            vocal: {
              title: "ボイスを選択"
            },
            volume: {
              title: 'ボイス 音量',
              placeholder: '百分率。 0-100 有効',
            },
            font: {
              size: 'フォントサイズ',
              options: {
                default: 'デフォルト',
                small: '小さい',
                medium: '中くらい',
                large: '大きい',
              }
            },
            position: {
              title: "関連する立ち絵の位置",
              options: {
                none: '指定なし',
                left: '左',
                center: '中央',
                right: '右',
                id: "立ち絵のID"
              }
            },
            id: {
              title: "関連する立ち絵のID",
              placeholder: "立ち絵のID"
            }
          }
        },
        common: {
          options: {
            goNext: {
              title: "連続実行",
              on: "この文が実行された後、次の文を実行",
              off: "この文が実行されるのを待つ"
            }
          }
        },
        bgm: {
          title: "BGM",
          initText: "bgm: BGMを選択;",
          descText: 'BGMの再生と停止が可能です',
          options: {
            stop: {
              title: "BGMの切り替え",
              on: "BGMを停止",
              off: 'BGMを再生',
              choose: 'BGMを選択'
            },
            file: {
              title: 'BGMファイルを選択',
            },
            volume: {
              title: 'BGM 音量',
              placeholder: '百分率。 0-100 有効',
            },
            enter: {
              title: 'フェードインとアウト',
              placeholder: 'ミリ秒単位。 0~ 有効',
            },
            name: {
              title: "BGMの名前",
              placeholder: ""
            }
          }
        },
        changeBg: {
          title: "背景画像",
          initText: 'changeBg: 背景画像を選択;',
          descText: '背景画像の表示・非表示を切り替えます',
          options: {
            hide: {
              title: "背景画像の切り替え",
              on: "背景画像を非表示",
              off: "背景画像を表示",
              choose: "背景画像を選択",
            },
            file: {
              title: '背景画像ファイルを選択'
            },
            name: {
              title: "CGの名前",
              placeholder: ""
            },
            displayEffect: {
              title: "エフェクト",
              on: "使う",
              off: "使わない"
            }
          }
        },
        changeCallScene: {
          title: "別のシーンを呼び出す",
          initText: "callScene: 別のシーンの呼び出し;",
          descText: 'シーンファイルを呼び出し、終了後に親シーンに戻る',
          options: {
            file: {
              title: "シーンファイルを選択",
            },
            call: {
              title: 'シーン切り替え',
              on: "シーンを呼び出し、新しいシーン終了後に親シーンに戻る",
              off: "シーン切り替え後、新しいシーンを親シーンとして置き換え"
            }
          }
        },
        changeFigure: {
          title: '立ち絵',
          initText: "changeFigure: 立ち絵を選択;",
          descText: '立ち絵の追加・描画位置を指定する',
          options: {
            hide: {
              title: "立ち絵の切り替え",
              on: "立ち絵を非表示",
              off: '立ち絵を表示',
              choose: '立ち絵ファイルを選択'
            },
            file: {
              title: '立ち絵ファイルを選択',
            },
            position: {
              title: "描画位置",
              options: {
                left: '左',
                center: '中央',
                right: '右'
              }
            },
            id: {
              title: "立ち絵のID(オプション)",
              placeholder: "立ち絵のID"
            },
            displayEffect: {
              title: "エフェクト",
              on: "使う",
              off: "使わない"
            },
            tips: {
              setEffect: "ヒント: エフェクトは、別の立ち絵に切り替えた場合、または前の立ち絵を閉じて再度追加した場合にのみ有効になります。 既存の立ち絵に効果を設定する場合は、別の「エフェクトを使う」コマンドを使用してください",
            },
            duration: {
              title: "所要時間",
              placeholder: "所要時間 (ミリ秒)",
            },
            animationType: {
              title: "アニメーション設定",
              flag: "アニメーションの有無",
              lipSync: {
                title: "口パク",
                mouthOpen: "開いた",
                mouthHalfOpen:  "半分開いた口",
                mouthClose:  "閉じた口",
              },
              blink: {
                title: "まばたき",
                eyesOpen: "開いた目",
                eyesClose:  "閉じた目",
              },
            }
          }
        },
        changeScene: {
          title: "シーンの切り替え",
          initText: "changeScene: シーンファイルを選択;",
          descText: '別のシーンファイルに切り替えて現在のシーンをクリアする',
        },
        setAnime: {
          title: "アニメーション",
          initText: "setAnimation: アニメーションを選択;",
          descText: '立ち絵や背景画像にアニメーションを指定する',
          options: {
            tips: {
              set: "ヒント: 最初に立ち絵の描画/背景を設定してから、アニメーションを適用します。そうしないと、ターゲットが見つかりません。",
              select: "適用するアニメーションファイルを選択します。ここで、animationTableはアニメーション定義です。選択しないでください。"
            },
            file: {
              title: "アニメーションファイルを選択"
            },
            preparedTarget: {
              title: "事前設定されたターゲットを使用",
              on: "以前に設定されたアクションターゲットを使用",
              off: "IDを手動で設定",
              choose: {
                title: "ターゲットを選択",
                options: {
                  figLeft: "左の立ち絵",
                  figCenter: "中央の立ち絵",
                  figRight: "右の立ち絵",
                  bgMain: "背景画像"
                }
              }
            },
            targetId: {
              title: "ターゲットIDを入力",
              placeholder: "立ち絵ID",
            },
            duration: {
              title: "期間 (ミリ秒)",
            }
          }
        },
        video: {
          title: "動画の再生",
          initText: "playVideo: 動画を選択;",
          descText: '動画ファイルを再生する',
          options: {
            file: {
              title: "動画ファイルを選択"
            },
            video: {
              option: "動画のオプション",
              skipOff: "動画のスキップを無効にする",
              skipOn: "動画のスキップを有効にする"
            }
          }
        },
        specialEffect: {
          title: "特殊効果を使う",
          initText: "pixiPerform:snow;",
          descText: '現在のステージに特殊効果を追加する',
          options: {
            clear: {
              title: "特殊効果の有無",
              on: "特殊効果を無効",
              off: "特殊効果を使用"
            },
            usePrepared: {
              title: "プレハブ効果を使用",
              on: "デフォルトの特殊効果を使用",
              off: "カスタムの特殊効果を使用",
              effects: {
                snow: "雪",
                rain: "雨",
                cherryBlossoms: "桜"
              }
            },
            useUser: {
              title: "カスタムの特殊効果名",
            },

          }
        },
        clearSpecialEffect: {
          title: "特殊効果を無効化",
          initText: "pixiInit;",
          descText: '現在の特殊効果を無効化する',
        },
        intro: {
          title: "全画面テキスト",
          initText: "intro:;",
          descText: '全画面画面でテキストを表示する',
          options: {
            value: {
              placeholder: "",
            },
            add: {
              button: '新しい行を追加'
            },
            option: {
              title: 'その他のオプション'
            },
            colorPicker: {
              backgroundColor: '背景色',
              fontColor: '文字色',
              submit: '色の変更を適用'
            },
            font: {
              size: '文字サイズ',
              animation: 'アニメーション',
              delayTime: '遅延時間（秒）'
            }
          }
        },
        miniAvatar: {
          title: "コーナーアバター",
          initText: "miniAvatar: アバターファイルを選択;",
          descText: 'ダイアログの左下に小さなアバターを表示します',
          options: {
            close: {
              title: "アバターの表示切替",
              on: "アバターを非表示",
              off: "アバターを表示",
              choose: 'アバターを選択'
            },
            file: {
              title: "アバターファイルを選択",
            }
          }
        },
        setTextBox: {
          title: "テキストボックス",
          initText: "setTextbox:hide;",
          descText: 'テキストボックスの表示を制御する',
          options: {
            hide: {
              title: "テキストボックスの表示切替",
              on: "テキストボックスを非表示",
              off: "テキストボックスを表示"
            }
          }
        },
        choose: {
          title: "選択肢",
          initText: "choose: 選択肢を設定;",
          descText: '選択肢からシーンに切り替えることが可能です',
          delete: '削除',
          option: {
            name: '選択肢を設定',
            option: '選択肢を設定',
            chooseFile: 'シーンファイルを選択'
          },
          add: '追加',
        },
        soundEffect: {
          title: "効果音",
          initText: "playEffect: 効果音を選択;",
          descText: '効果音を再生します',
          options: {
            stop: {
              title: "効果音の切り替え",
              on: "効果音を停止",
              off: "効果音を再生",
              choose: "効果音ファイルを選択"
            },
            file: {
              title: '効果音ファイルを選択',
            },
            id: {
              title: "効果音ID(効果音をループし、このIDを使用して後ほど停止可能)",
              placeholder: "効果音ID"
            },
            volume: {
              title: '効果音 音量',
              placeholder: '百分率。 0-100 有効',
            }
          }
        },
        unlockCg: {
          title: "CG鑑賞",
          initText: "unlockCg:;",
          descText: 'CG鑑賞に任意の画像を追加する',
          options: {
            tips: {
              afterEdit: "ヒント: 編集後に無効なCG/BGMが見つかった場合は、WebGALゲームインターフェイスのオプションで[すべてのデータを消去]を選択して消去"
            },
            type: {
              title: "タイプ",
              options: {
                cg: "CG",
                bgm: "BGM"
              }
            },
            file: {
              title: "ファイルを選択"
            },
            name: {
              title: "CG/BGMの名前",
              placeholder: ""
            }
          }
        },
        unlockBgm: {
          title: "BGM鑑賞",
          initText: "unlockBgm:;",
          descText: 'BGM鑑賞に任意のBGMを追加する',
        },
        comment: {
          title: "コメント",
          initText: ";Comment",
          descText: 'コメントを追加します',
          options: {
            value: {
              title: "コメント",
              tip: 'コメントは編集時のみ表示され、ゲームプレイ時には非表示',
            }
          }
        },
        transition: {
          title: "トランジションを使う",
          initText: "setTransition:;",
          descText: 'トランジション効果を使うする',
          options: {
            enterfile: {
              title: "入るアニメーションを選択",
            },
            exitfile: {
              title: "出るアニメーションを選択",
            },
            preparedTarget: {
              title: "事前設定されたターゲットを使用",
              on: "以前に設定されたアクションターゲットを使用",
              off: "IDを手動で設定",
              choose: {
                title: "ターゲットを選択",
                options: {
                  figLeft: "左の立ち絵",
                  figCenter: "中央の立ち絵",
                  figRight: "右の立ち絵",
                  bgMain: "背景画像"
                }
              }
            },
            targetId: {
              title: "ターゲットIDを入力",
              placeholder: "立ち絵ID",
            }
          }
        },
        transform: {
          title: "エフェクトを使う",
          initText: "setTransform: -duration=0;",
          descText: '立ち絵や背景画像のエフェクトを使う',
          transform: {
            title: "トランスフォーム",
            x: " X軸位移：",
            y: " Y軸位移：",
          },
          scale: {
            title: "スケール",
            x: " X軸スケール：",
            y: " Y軸スケール：",
          },
          effect: {
            title: "エフェクト",
            alpha: "透明度（０－１）：",
            rotation: "回転：",
            blur: "ぼかし：",
          },
          filter: {
            title: "フィルター",
            oldFilm: "古い映画",
            dotFilm: "ドット映画",
            reflectionFilm: "反射映画",
            glitchFilm: "グリッチ映画",
            rgbFilm: "RGB映画",
            godrayFilm: "ゴッドレイ映画",
          },
        },
        end: {
          title: "ゲーム終了",
          initText: "end;",
          descText: 'ゲームが終了され、タイトル画面に戻ります',
          tip: 'このコマンドはすべてのゲームが終わるときに使用',
        },
        unknown: {
          title: "認識されないコマンド",
          options: {
            tip: {
              title: "認識されないコマンド",
              text: 'このコマンドは認識されません、スクリプト編集モードで編集してください'
            }
          }
        }
      },

      components: {
        addSentence: {
          dialogs: {
            add: {
              text: {
                forward: "選択した文の前に追加",
                backward: '最後の文の後に追加'
              }
            }
          }
        },
        template: {
          title: "コンポーネントの編集",
          text: 'ここにコンポーネントを配置'
        }
      },
    },

    fileChoose: {
      cancel: "キャンセル",
      choose: "ファイル選択",
      fileSearch: 'ファイル検索'
    }
  }
};
