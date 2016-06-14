/**
 * Created by lucky on 2016/6/14.
 */

;
(function () {
    /**
     *  ele: �ĸ�Ԫ���˶�
     *  target: �˶����յ�
     *  begin: �����˶�����㣬���ǲ��ô���ͨ����ȡele�ĵ�ǰ��ÿ��ά�ȵ����Ϳ�����
     *  chage: target - begin
     *  duration :  ʱ����������ô��ʱ��������ҵĶ�����
     *
     */
    var zhufengEffect = {
        //����
        Linear: function (t, b, c, d) {
            return c * t / d + b;
        },
        //ָ��˥���ķ�������
        Bounce: {
            easeIn: function (t, b, c, d) {
                return c - zhufengEffect.Bounce.easeOut(d - t, 0, c, d) + b;
            },
            easeOut: function (t, b, c, d) {
                if ((t /= d) < (1 / 2.75)) {
                    return c * (7.5625 * t * t) + b;
                } else if (t < (2 / 2.75)) {
                    return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
                } else if (t < (2.5 / 2.75)) {
                    return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
                } else {
                    return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
                }
            },
            easeInOut: function (t, b, c, d) {
                if (t < d / 2) {
                    return zhufengEffect.Bounce.easeIn(t * 2, 0, c, d) * .5 + b;
                }
                return zhufengEffect.Bounce.easeOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
            }
        },
        //���η��Ļ���
        Quad: {
            easeIn: function (t, b, c, d) {
                return c * (t /= d) * t + b;
            },
            easeOut: function (t, b, c, d) {
                return -c * (t /= d) * (t - 2) + b;
            },
            easeInOut: function (t, b, c, d) {
                if ((t /= d / 2) < 1) {
                    return c / 2 * t * t + b;
                }
                return -c / 2 * ((--t) * (t - 2) - 1) + b;
            }
        },
        //���η��Ļ���
        Cubic: {
            easeIn: function (t, b, c, d) {
                return c * (t /= d) * t * t + b;
            },
            easeOut: function (t, b, c, d) {
                return c * ((t = t / d - 1) * t * t + 1) + b;
            },
            easeInOut: function (t, b, c, d) {
                if ((t /= d / 2) < 1) {
                    return c / 2 * t * t * t + b;
                }
                return c / 2 * ((t -= 2) * t * t + 2) + b;
            }
        },
        //�Ĵη��Ļ���
        Quart: {
            easeIn: function (t, b, c, d) {
                return c * (t /= d) * t * t * t + b;
            },
            easeOut: function (t, b, c, d) {
                return -c * ((t = t / d - 1) * t * t * t - 1) + b;
            },
            easeInOut: function (t, b, c, d) {
                if ((t /= d / 2) < 1) {
                    return c / 2 * t * t * t * t + b;
                }
                return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
            }
        },
        //��η��Ļ���
        Quint: {
            easeIn: function (t, b, c, d) {
                return c * (t /= d) * t * t * t * t + b;
            },
            easeOut: function (t, b, c, d) {
                return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
            },
            easeInOut: function (t, b, c, d) {
                if ((t /= d / 2) < 1) {
                    return c / 2 * t * t * t * t * t + b;
                }
                return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
            }
        },
        //�������ߵĻ���
        Sine: {
            easeIn: function (t, b, c, d) {
                return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
            },
            easeOut: function (t, b, c, d) {
                return c * Math.sin(t / d * (Math.PI / 2)) + b;
            },
            easeInOut: function (t, b, c, d) {
                return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
            }
        },
        //ָ�����ߵĻ���
        Expo: {
            easeIn: function (t, b, c, d) {
                return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
            },
            easeOut: function (t, b, c, d) {
                return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
            },
            easeInOut: function (t, b, c, d) {
                if (t == 0) return b;
                if (t == d) return b + c;
                if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
        },
        //Բ�����ߵĻ���
        Circ: {
            easeIn: function (t, b, c, d) {
                return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
            },
            easeOut: function (t, b, c, d) {
                return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
            },
            easeInOut: function (t, b, c, d) {
                if ((t /= d / 2) < 1) {
                    return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
                }
                return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
            }
        },
        //������Χ�����η�����
        Back: {
            easeIn: function (t, b, c, d, s) {
                if (s == undefined) s = 1.70158;
                return c * (t /= d) * t * ((s + 1) * t - s) + b;
            },
            easeOut: function (t, b, c, d, s) {
                if (s == undefined) s = 1.70158;
                return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
            },
            easeInOut: function (t, b, c, d, s) {
                if (s == undefined) s = 1.70158;
                if ((t /= d / 2) < 1) {
                    return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
                }
                return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
            }
        },
        //ָ��˥�����������߻���
        Elastic: {
            easeIn: function (t, b, c, d, a, p) {
                if (t == 0) return b;
                if ((t /= d) == 1) return b + c;
                if (!p) p = d * .3;
                var s;
                !a || a < Math.abs(c) ? (a = c, s = p / 4) : s = p / (2 * Math.PI) * Math.asin(c / a);
                return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            },
            easeOut: function (t, b, c, d, a, p) {
                if (t == 0) return b;
                if ((t /= d) == 1) return b + c;
                if (!p) p = d * .3;
                var s;
                !a || a < Math.abs(c) ? (a = c, s = p / 4) : s = p / (2 * Math.PI) * Math.asin(c / a);
                return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
            },
            easeInOut: function (t, b, c, d, a, p) {
                if (t == 0) return b;
                if ((t /= d / 2) == 2) return b + c;
                if (!p) p = d * (.3 * 1.5);
                var s;
                !a || a < Math.abs(c) ? (a = c, s = p / 4) : s = p / (2 * Math.PI) * Math.asin(c / a);
                if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
                return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
            }
        }
    };

    function move(ele, target, duration, effect, callback) { //�Ѹո��Ǹ��෽����˶���װ��һ������,���κ�Ԫ��ֻҪ�����������˶�
        var begin = {}; //��������begin���������ά��,begin��ά�ȵĶ��٣���target�㴫������ά�ȶ����й�ϵ����������Ҫ����target�������Ȼ��target���ж��������ԣ���ôbegin��Ҳ����Ӷ�����
        var change = {};
        var time = 0;
        var interval = 10;
        var defaultEffect = zhufengEffect.Linear;
        if (typeof effect === 'number') {
            switch (effect) {
                case 1:
                    defaultEffect = zhufengEffect.Elastic.easeIn;
                    break;
                case 2:
                    defaultEffect = zhufengEffect.Bounce.easeInOut;
                    break;
            }
        } else if (typeof effect == 'function') {
            callback = effect;
        }

        //���봫��һ��target   {left:300, width:500} ==>�����ele��duration��ʱ���ڰ�left������300����width������500
        for (var attr in target) { //attr��һ��ѭ������left���ڶ���ѭ������width
            if (target.hasOwnProperty(attr)) { //����for inѭ���������ԭ�����Լ���ӵ����ԣ���������Ҫ������ж�
                //��begin������������target���е�����
                begin[attr] = utils.getCss(ele, attr); //??
                change[attr] = target[attr] - begin[attr];
            }
        }
        var timer = window.setInterval(function () {
            //���︺����Ƕ�ά�ȵĶ���
            time += interval; //�˶�ÿ�ζ�Ҫ���ۼ�һ�λ��ѵ�ʱ�䣬�����ÿ��ά�ȸı����������
            //change �� {left : target.left - begin.left,  width: target.width - begin.width}
            if (time >= duration) { //ʱ����ˣ�����Ҳһ������,��Ӧ��λ��Ҳ�Ѿ������յ���
                window.clearInterval(timer);
                for (var tarKey  in target) {
                    utils.setCss(ele, tarKey, target[tarKey]); //��Ϊ���õ��յ�
                }
                //˵���Ѿ��˶����յ���,�˶����յ㻹Ҫ��������
                if (typeof callback == 'function') {
                    callback.call(ele);
                }
                return;
            }
            for (var key in change) { //ѭ������ÿһ��ά�ȣ�Ȼ����ÿһ��ά�ȶ�������,��һ�α���change���ǵ�key����left���ڶ��ξ���width
                var curWeidu = change[key]; //change['left'] ==> ��ȡleft���ά�ȵĸı�ֵ,�������ı�ֵΪ0���б�Ҫ�˶�ô��
                if (curWeidu) { //if(0),�����ǰ��ά��û��ֵ�ĸı䣬��û�б�Ҫ�˶���
                    var curPosi = defaultEffect(time, begin[key], change[key], duration);//��Ҫ����time�ı仯���������ǰά����Ҫ�˶�����
                    utils.setCss(ele, key, curPosi);
                }

            }
        }, interval);

    }

    window.zhufengAnimate = move; //��ȫ���������������һ������zhufengAnimate������
})();
