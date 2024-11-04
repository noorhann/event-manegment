<?php

namespace Drupal\events_management\Entity;

use Drupal\Core\Entity\ContentEntityBase;
use Drupal\Core\Field\BaseFieldDefinition;
use Drupal\Core\Entity\EntityTypeInterface;
use Drupal\user\EntityOwnerTrait;
use Drupal\user\UserInterface;

/**
 * Defines the Event entity.
 *
 * @ContentEntityType(
 *   id = "event",
 *   label = @Translation("Event"),
 *   base_table = "events",
 *   entity_keys = {
 *     "id" = "id",
 *     "label" = "title"
 *   },
 *   handlers = {
 *     "form" = {
 *       "default" = "Drupal\events_management\Form\EventForm",
 *       "add" = "Drupal\events_management\Form\EventForm",
 *       "edit" = "Drupal\events_management\Form\EventForm",
 *       "delete" = "Drupal\events_management\Form\EventDeleteForm"
 *     }
 *   }
 * )
 */
class Event extends ContentEntityBase
{
    public static function baseFieldDefinitions(EntityTypeInterface $entity_type)
    {
        $fields = parent::baseFieldDefinitions($entity_type);

        $fields['title'] = BaseFieldDefinition::create('string')
            ->setLabel(\Drupal::translation()->translate('Title'))
            ->setRequired(TRUE);

        $fields['image'] = BaseFieldDefinition::create('image')
            ->setLabel(\Drupal::translation()->translate('Image'));

        $fields['description'] = BaseFieldDefinition::create('text_long')
            ->setLabel(\Drupal::translation()->translate('Description'));

        $fields['start_time'] = BaseFieldDefinition::create('datetime')
            ->setLabel(\Drupal::translation()->translate('Start Time'))
            ->setRequired(TRUE);

        $fields['end_time'] = BaseFieldDefinition::create('datetime')
            ->setLabel(\Drupal::translation()->translate('End Time'))
            ->setRequired(TRUE);

        $fields['category'] = BaseFieldDefinition::create('entity_reference')
            ->setLabel(\Drupal::translation()->translate('Category'))
            ->setSetting('target_type', 'taxonomy_term')
            ->setSetting('handler', 'default');

        return $fields;
    }
}
