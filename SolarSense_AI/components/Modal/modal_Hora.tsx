import { StyleSheet, View, Image, Modal, TouchableOpacity } from 'react-native';
import { useState } from 'react';

function AgendarHora () {

    const [visiblemodal, notvisiblemodal] = useState(false);

    return(

        <View>

            <TouchableOpacity onPress={() => notvisiblemodal(true)}>


            </TouchableOpacity>

            <Modal
             visible = {visiblemodal}
             transparent = {true}
             onRequestClose={() => notvisiblemodal(false)}
            >
               




            </Modal>

        </View>

    )
}

export default AgendarHora;