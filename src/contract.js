import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ContractScreen = () => {
    const [input1, setInput1] = useState('Hoàng');
    const [input2, setInput2] = useState('Trần Huy Hoàng');
    const [input3, setInput3] = useState('');
    const [input4, setInput4] = useState('');
    const [dateNow, setDateNow] = useState('');
    const navigation = useNavigation();
    const Confirm = () => {
        navigation.navigate('BookSuccess');
      };
    useEffect(() => {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('vi-VN');
        setDateNow(formattedDate);
    }, []);

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={{ fontWeight: 'bold', fontSize: 15, marginTop: 100, marginBottom: 10, textAlign: 'center' }}>
                    CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
                </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 14, marginBottom: 40, textAlign: 'center' }}>
                    Độc lập - Tự do - Hạnh Phúc
                </Text>
                <Text style={{ fontSize: 14, marginRight: 10, textAlign: 'right' }}>
                    TP.Hồ Chí Minh,{dateNow}
                </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 40, marginBottom: 40, textAlign: 'center', color: '#26AAA0' }}>
                    HỢP ĐỒNG MUA TIMESHARE KHU VILLA
                </Text>
                <Text style={styles.textLabel}>
                    - Căn cứ: Bộ luật dân sự số: 91/2015/QH13 được quốc hội ban hành ngày 24/11/2015;
                </Text>
                <Text style={styles.textLabel}>
                    - Căn cứ: Luật thương mại 2005
                </Text>
                <Text style={styles.textLabel}>
                    - Căn cứ nhu cầu và khả năng của các bên
                </Text>
                <Text style={{fontSize: 14,marginLeft: 5, marginTop: 20 }}>
                    Hôm nay, {dateNow}, chúng tôi bao gồm:
                </Text>
                <Text style={{ fontWeight: 'bold',fontSize: 15,marginLeft: 5, marginTop: 5 }}>
                    Bên A (bên bán):
                </Text>
                <Text style={styles.textLabel}>
                    Tên công ty: The Oasis Luxury Company
                </Text>
                <Text style={styles.textLabel}>
                    Địa chỉ trụ sở: Khu dân cư và công viên Phước Thiện, Phường Long Bình và Phường Long Thạch Mỹ, Quận 9, TP.Hồ Chí Minh.
                </Text>
                <Text style={styles.textLabel}>
                    Mã số thuế: 012856421-689.
                </Text>
                <Text style={styles.textLabel}>
                    Hotline: 19003542
                </Text>
                <Text style={styles.textLabel}>
                    Số Fax: +84 (8) 3623 3818
                </Text>
                <Text style={styles.textLabel}>
                    Người đại diện theo pháp luật:
                </Text>
                <Text style={styles.textLabel}>
                    Ông/Bà: Nguyễn Văn Anh
                </Text>
                <Text style={styles.textLabel}>
                    Chức vụ: CEO
                </Text>
                <Text style={styles.textLabel}>
                    Số điện thoại liên hệ: 0945 678 234
                </Text>
                <Text style={styles.textLabel}>
                    SỐ CCCD: 231420308
                </Text>
                <Text style={styles.textLabel}>
                    Ngày cấp: 18/09/2021
                </Text>
                <Text style={styles.textLabel}>
                    Nơi cấp: TP. Hồ Chí Minh
                </Text>
                <Text style={{ fontWeight: 'bold',fontSize: 15,marginLeft: 5 , marginTop:5}}>
                    Bên B (bên mua):
                </Text>
                <Text style={styles.textLabel}>
                    Người đại diện theo pháp luật:
                </Text>
                <Text style={styles.textLabel}>
                    (1) Ông/Bà:
                </Text>
                <Text style={styles.textLabel}>
                    Số điện thoại liên hệ:
                </Text>
                <Text style={styles.textLabel}>
                    (2) Mã số thuế:
                </Text>
                <Text style={styles.textLabel}>
                    (3) Số CCCD:
                </Text>
                <Text style={styles.textLabel}>
                    (4)Ngày cấp:
                </Text>
                <Text style={styles.textLabel}>
                    nơi cấp:
                </Text>
                <Text style={{fontSize: 14,marginLeft: 5, marginTop: 20 }}>
                    Cùng bàn bạc thống nhất những thỏa thuận sau đây:
                </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#26AAA0',marginTop: 5  }}>
                    Điều 1. Đối tượng hợp đồng
                </Text>
                <Text style={styles.textLabel}>
                    Bên A đồng ý cho bên B mua Time share khu nghỉ dưỡng từ ngày đến ngày. Thông tin Time share khu nghỉ dưỡng cụ thể như sau:
                </Text>
                <Text style={styles.textLabel}>
                    <Text style={styles.text}>Tên Villa:</Text> {'\n'}
                    {/* <Text style={styles.textValue}>{villa_name}</Text> */}
                    <Text style={styles.text}>Må Villa:</Text>{'\n'}
                    {/* <Text style={styles.textValue}>{villa_id}</Text> */}
                    <Text style={styles.text}>Địa chỉ villa:</Text> {'\n'}
                    {/* <Text style={styles.textValue}>{address}</Text> */}
                    <Text style={styles.text}>Thời gian bắt đầu:</Text>{'\n'}
                    {/* <Text style={styles.textValue}>{start_date}</Text> */}
                    <Text style={styles.text}>Thời gian kết thúc:</Text>{'\n'}
                    {/* <Text style={styles.textValue}>{end_date}</Text> */}
                    <Text style={styles.text}>Tổng số tuần:</Text> {'\n'}
                    {/* <Text style={styles.textValue}>{total_week}</Text> */}
                    <Text style={styles.text}>Tiện ích:</Text>
                    {/* <Text style={styles.textValue}>{utilities}</Text> */}
                </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#26AAA0', marginTop: 5 }}>
                    Điều 2. Gía bán và phương thức thanh toán
                </Text>
                <Text style={styles.textLabel}>
                    1. Giá bán Time share Villa là price đồng Việt Nam/ total_week tuần.
                </Text>
                <Text style={styles.textLabel}>
                    - Giá bán này đã bao gồm chi phí bảo trì, quản lý vận hành villa và các Khoản thuế mà Bên bán phải nộp cho villa nước theo quy định.
                </Text>
                <Text style={styles.textLabel}>
                    <Text style={styles.text}>2.2. Các chi phí sử dụng điện, nước, điện thoại và các dịch vụ khác do Bên mua thanh toán cho bên cung cấp điện, nước, điện thoại và các cơ quan cung cấp dịch vụ khác.</Text> {'\n'}
                    <Text style={styles.text}>2.3. Phương thức thanh toán: thanh toán bằng tiền Việt Nam thông qua hình thức dropdown (trả bằng tiền mặt hoặc chuyển Khoản qua ngân hàng)</Text>{'\n'}
                    <Text style={styles.text}>2.4. Thời hạn thanh toán: Bên mua trả tiền mua Time share villa vào ngày now_date.</Text> {'\n'}
                </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#26AAA0' }}>
                    Điều 3. Quyền và nghĩa vụ của Bên mua
                </Text>
                <Text style={styles.textLabel}>
                    <Text style={styles.text}>- Yêu cầu Bên mua trả đủ tiền mua Time share villa theo đúng thỏa thuận đã cam kết:</Text> {'\n'}
                    <Text style={styles.text}>- Yêu cầu Bên mua có trách nhiệm sửa chữa các hư hỏng và bồi thường thiệt hại do lỗi của Bên mua gây ra (nếu có);</Text>{'\n'}
                    <Text style={styles.text}>- Yêu cầu Bên mua thanh toán đủ số tiền mua Timeshare villa (đối với thời gian đã mua) và giao lại villa ở trong các trường hợp các bên thỏa thuận chấm dứt hợp đồng mua Time share villa ở trước thời hạn;</Text> {'\n'}
                    <Text style={styles.text}>- Bảo trì, cải tạo villa ở;</Text> {'\n'}
                    <Text style={styles.text}>- Giao villa ở và trang thiết bị gắn liền với villa ở (nếu có) cho Bên mua đúng thời gian quy định tại Khoản 1 Điều 3 của hợp đồng này,</Text> {'\n'}
                    <Text style={styles.text}>- Thông báo cho Bên mua biết các quy định về quản lý sử dụng villa ở;</Text> {'\n'}
                    <Text style={styles.text}>- Bảo đảm cho Bên mua sử dụng ổn định villa ở trong thời hạn mua Time share villa;</Text> {'\n'}
                    <Text style={styles.text}>- Trả lại số tiền mua Time share villa mà Bên mua đã trả trước trong trường hợp các bên thỏa thuận chấm dứt hợp đồng mua Time share villa ở trước thời hạn;</Text> {'\n'}
                    <Text style={styles.text}>- Bảo trì, quản lý villa ở bán Time share theo quy định của pháp luật về quản lý sử dụng villa ở;</Text> {'\n'}
                </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#26AAA0' }}>
                    Điều 4. Quyền và nghĩa vụ của Bên bán
                </Text>
                <Text style={styles.textLabel}>
                    <Text style={styles.text}>- Nhận villa ở và trang thiết bị gắn liền với villa ở (nếu có) theo đúng thỏa thuận tại Khoản 1 Điều 3 của hợp đồng này:</Text> {'\n'}
                    <Text style={styles.text}>- Yêu cầu Bên bán Time share sửa chữa kịp thời các hư hỏng về villa ở; </Text>{'\n'}
                    <Text style={styles.text}>- Yêu cầu Bên bản Time share villa trả lại số tiền mua Time share villa mà Bên mua đã nộp trước trong trường hợp chấm dứt hợp đồng mua Time share villa trước thời hạn;</Text> {'\n'}
                    <Text style={styles.text}>- Được đổi villa ở đang mua với người khác hoặc bán Time share lại (nếu có thỏa thuận);</Text> {'\n'}
                    <Text style={styles.text}>- Được tiếp tục mua theo các điều kiện thỏa thuận với Bên bản Time share trong trường hợp có thay đổi về chủ sở hữu villa ở;</Text> {'\n'}
                    <Text style={styles.text}>- Trả đủ tiền mua Time share villa theo đúng thời hạn đã cam kết trong hợp đồng;</Text> {'\n'}
                    <Text style={styles.text}>- Sử dụng villa ở đúng mục đích; có trách nhiệm sửa chữa phần hư hỏng do mình gây ra;</Text> {'\n'}
                    <Text style={styles.text}>- Chấp hành đầy đủ các quy định về quản lý sử dụng villa ở;</Text> {'\n'}
                    <Text style={styles.text}>- Không được chuyển nhượng hợp đồng mua Time share villa hoặc cho người khác mua lại, trừ trường hợp được Bên bán Time share đồng ý:</Text> {'\n'}
                    <Text style={styles.text}>- Chấp hành các quy định về giữ gìn vệ sinh môi trường và an ninh trật tự trong khu vực cư trú;</Text> {'\n'}
                </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#26AAA0' }}>
                    Điều 5. Cam kết của các bên
                </Text>
                <Text style={styles.textLabel}>
                    <Text style={styles.text}>
                        5.1. Bên bán Time share cam kết villa ở bán Time share thuộc quyền sở hữu hợp pháp của mình, không có tranh chấp về quyền sở hữu,
                        không bị kê biên để thi hành án hoặc để chấp hành quyết định hành chính của cơ quan villa nước có thẩm quyền (không thuộc diện bị thu hồi hoặc không bị giải tỏa);
                        cam kết villa ở đảm bảo chất lượng, an toàn cho bên mua Time share villa.
                    </Text> {'\n'}
                    <Text style={styles.text}>
                        5.2. Bên mua Time share villa đã tìm hiểu kỹ các thông tin về villa ở mua.
                    </Text>{'\n'}
                    <Text style={styles.text}>
                        5.3. Việc ký kết hợp đồng này giữa các bên là hoàn toàn tự nguyện, không bị ép buộc, lừa dối. Trong quá trình thực hiện hợp đồng,
                        nếu cần thay đổi hoặc bổ sung nội dung của hợp đồng này thì các bên thỏa thuận lập thêm phụ lục hợp đồng có chữ ký của hai bên,
                        phụ lục hợp đồng có giá trị pháp lý như hợp đồng này
                    </Text> {'\n'}
                    <Text style={styles.text}>
                        5.4. Các bên cùng cam kết thực hiện đúng và đầy đủ các nội dung đã thỏa thuận trong hợp đồng.
                    </Text> {'\n'}
                </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#26AAA0' }}>
                    Điều 6. Trường Hợp Bất Khả Kháng
                </Text>
                <Text style={styles.textLabel}>
                    <Text style={styles.text}>
                        Trong trường hợp một bên không thể thực hiện được nghĩa vụ hợp đồng do các hiện tượng thiên nhiên, lũ lụt, động đất, chiến tranh, khởi nghĩa, nổi loạn và các sự kiện khách
                        quan không nằm trong sự kiểm soát hợp lý của Bên bị ảnh hưởng, và nếu Bên này đã nỗ lực hợp lý giảm thiểu hậu quả,
                        và đã báo cáo bằng văn bản cho bên còn lại một cách nhanh chóng thì đó sẽ là lý do để biện minh và thời gian thi công sẽ được gia hạn thêm thời gian bị đình trệ bởi sự kiện này.
                        Bất kể nguyên do bất khả khác, nếu Bên bị ảnh hưởng không thực hiện nghĩa vụ trong vòng 3 ngày sau ngày sự kiện bất khả kháng xảy ra thì bên kia có quyền chấm dứt hợp đồng.
                    </Text> {'\n'}
                </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#26AAA0' }}>
                    Điều 7. Vi phạm và chế tài
                </Text>
                <Text style={styles.textLabel}>
                    <Text style={styles.text}>
                        7.1. Trừ trường hợp bất khả kháng, nếu một trong hai bên không thực hiện đúng theo thỏa thuận của hợp đồng hoặc đơn phương chấm dứt hợp đồng không có sự thỏa thuận của hai bên,
                        thì sẽ bị phạt 15% giá trị hợp đồng.
                    </Text> {'\n'}
                    <Text style={styles.text}>
                        7.2. Bên vi phạm hợp đồng, ngoài việc chịu phạt vi phạm theo thỏa thuận tại Khoản 9.1. Điều này, còn phải chịu bồi thường thiệt hại cho bên bị vi phạm theo quy định của pháp luật,
                        bao gồm nhưng không giới hạn những Khoản thiệt hại: thiệt hại thực tế, trực tiếp mà một bên phải gánh chịu do bên còn lại vi phạm hợp đồng gây ra;
                        thiệt hại là Khoản lợi nhuận mà bên bị vi phạm lẽ ra được hưởng nếu không có hành vi vi phạm hợp đồng của bên còn lại,
                        các Khoản chi phí mà bên bị vi phạm bỏ ra để hạn chế khắc, phục thiệt hại, để thực hiện công việc cần thiết nhằm đòi bồi thường thiệt hại,
                        bảo vệ quyền lợi của bên bị vi phạm trong trường hợp bên vi phạm không ngay lập tức khắc phục,
                        bồi thường thiệt hại khi nhận được yêu cầu của bên bị vi phạm.
                    </Text> {'\n'}
                </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#26AAA0' }}>
                    Điều 8. Hiệu lực hợp đồng
                </Text>
                <Text style={styles.textLabel}>
                    <Text style={styles.text}>
                        - Hợp Đồng này có hiệu lực kể từ ngày ký và sẽ chấm dứt khi hết hạn bảo trì và biên bản thanh lý hợp đồng được hai Bên ký kết.
                    </Text> {'\n'}
                    <Text style={styles.text}>
                        - Mọi sự thay đổi hay bổ sung vào bản hợp đồng này phải được sự thống nhất của cả hai Bên và được lập thành văn bản mới có giá trị hiệu lực.
                    </Text> {'\n'}
                    <Text style={styles.text}>
                        - Hai Bên cam kết thực hiện nghiêm túc các điều Khoản đã thỏa thuận trong hợp đồng. - Hợp đồng làm thành 02 bản có giá trị pháp lý như nhau, mỗi Bên giữ 01 bản.
                    </Text> {'\n'}
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, marginLeft: 20 }}>
                            Chữ ký Bên A:
                        </Text>
                        <Text style={styles.textLabel}>
                            (ký và ghi rõ họ tên)
                        </Text>
                        <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                            <TextInput
                                style={[styles.textInput, { marginRight: 10 }]} // Để cách giữa hai ô nhập
                                placeholder="Ký"
                                onChangeText={(text) => setInput1(text)}
                                value={input1}
                            />
                            <TextInput
                                style={styles.textInput}
                                placeholder="Họ và Tên"
                                onChangeText={(text) => setInput2(text)}
                                value={input2}
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, marginLeft: 20 }}>
                            Chữ ký Bên B:
                        </Text>
                        <Text style={styles.textLabel}>
                            (ký và ghi rõ họ tên)
                        </Text>
                        <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                            <TextInput
                                style={[styles.textInput, { marginRight: 10 }]} // Để cách giữa hai ô nhập
                                placeholder="Ký"
                                onChangeText={(text) => setInput3(text)}
                                value={input3}
                            />
                            <TextInput
                                style={styles.textInput}
                                placeholder="Họ và Tên"
                                onChangeText={(text) => setInput4(text)}
                                value={input4}
                            />
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={Confirm} style={styles.saveButton}>
                    <Text style={styles.saveButtonText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    );
};

export default ContractScreen;
const styles = StyleSheet.create({
    container: {
        marginBottom: 100,
    },
    textLabel: {
        marginLeft: 5,
        marginRight: 5,
    },
    textValue: {
        marginLeft: 10,
        marginRight: 10,
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 20,
        paddingHorizontal: 10,
        width: 120,
        textAlign: 'center',

    },
    saveButton: {
        backgroundColor: '#26AAA0',
        padding: 10,
        borderRadius: 5,
        alignItems:'center',
        marginTop: 50,
        width: 150,
        marginLeft: 120,
      },
      saveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
});