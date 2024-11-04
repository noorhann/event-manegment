<?php

namespace Drupal\events_management\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

class ConfigForm extends ConfigFormBase
{

    public function getFormId()
    {
        return 'events_management_config_form';
    }

    protected function getEditableConfigNames()
    {
        return ['events_management.settings'];
    }

    public function buildForm(array $form, FormStateInterface $form_state)
    {
        $config = $this->config('events_management.settings');

        $form['show_past_events'] = [
            '#type' => 'checkbox',
            '#title' => $this->t('Show past events'),
            '#default_value' => $config->get('show_past_events'),
        ];

        $form['number_of_events'] = [
            '#type' => 'number',
            '#title' => $this->t('Number of events to list'),
            '#default_value' => $config->get('number_of_events'),
        ];

        return parent::buildForm($form, $form_state);
    }

    public function submitForm(array &$form, FormStateInterface $form_state)
    {
        $this->config('events_management.settings')
            ->set('show_past_events', $form_state->getValue('show_past_events'))
            ->set('number_of_events', $form_state->getValue('number_of_events'))
            ->save();

        // Log configuration changes.
        \Drupal::database()->insert('events_management_config_log')
            ->fields([
                'changed_by' => \Drupal::currentUser()->getDisplayName(),
                'change_time' => \Drupal::time()->getRequestTime(),
                'config_name' => 'events_management.settings',
            ])
            ->execute();

        parent::submitForm($form, $form_state);
    }
}
