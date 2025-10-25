import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Modal, 
  TouchableOpacity, 
  Text,
  SafeAreaView 
} from 'react-native';

interface ModalHoraProps {
  visible?: boolean;
  onClose?: () => void;
}

function AgendarHora({ visible = false, onClose }: ModalHoraProps) {
  const [visibleModal, setVisibleModal] = useState(visible);

  const handleClose = () => {
    setVisibleModal(false);
    if (onClose) onClose();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={() => setVisibleModal(true)}
        style={styles.openButton}
      >
        <Text style={styles.openButtonText}>Agendar Horário</Text>
      </TouchableOpacity>

      <Modal
        visible={visibleModal}
        transparent={true}
        animationType="slide"
        onRequestClose={handleClose}
      >
        <SafeAreaView style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Agendar Horário</Text>
            
            {/* Adicione aqui os componentes de seleção de hora */}
            
            <TouchableOpacity 
              onPress={handleClose}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  openButton: {
    backgroundColor: '#E60013',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  openButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '80%',
    maxWidth: 400,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  closeButtonText: {
    color: '#333',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default AgendarHora;